import { useContext } from "react";
import ChatListItem from "./chat-list-item";
import { ChatContext } from "../context/chat-context";

export default function ChatList() {
  const { chats, setSelectedChat, selectedChat, loading } =
    useContext(ChatContext);

  function handleChatClick(id: string) {
    const selectedChat = chats.find((chat) => chat.id === id) || null;
    setSelectedChat(selectedChat);
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return chats.map((chat) => {
    const lastMessage = chat.messages[chat.messages.length - 1];
    return (
      <ChatListItem
        key={chat.id}
        id={chat.id}
        iconSrc={lastMessage.sender.icon}
        title={chat.title}
        lastMessage={lastMessage.message}
        onChatClick={handleChatClick}
        isSelected={selectedChat?.id === chat.id}
      />
    );
  });
}
