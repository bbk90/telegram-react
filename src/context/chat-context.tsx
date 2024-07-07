import { createContext, ReactNode, useEffect, useState } from "react";
import { IChat } from "../types";
import { chatsData } from "../data/chats";

interface ChatContextType {
  chats: IChat[] | [];
  loading: boolean;
  setChats: React.Dispatch<React.SetStateAction<IChat[]>>;
  selectedChat: IChat | null;
  setSelectedChat: React.Dispatch<React.SetStateAction<IChat | null>>;
}

export const ChatContext = createContext<ChatContextType>({
  chats: [],
  loading: false,
  setChats: () => {},
  selectedChat: null,
  setSelectedChat: () => {},
});

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [chats, setChats] = useState<IChat[]>([]);
  const [selectedChat, setSelectedChat] = useState<IChat | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        // const response = await fetch("http://api.example.com/chats");
        // const data = await response.json();
        setIsLoading(true);
        const response: IChat[] = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(chatsData);
          }, 2000);
        });
        setIsLoading(false);
        setChats(response);
      } catch (error) {
        setIsLoading(false);
        console.error("Failed to fetch chats:", error);
      }
    };

    fetchChats();
  }, []);

  return (
    <ChatContext.Provider
      value={{
        chats,
        setChats,
        selectedChat,
        setSelectedChat,
        loading: isLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
