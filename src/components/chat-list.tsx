import { chatsData } from "../data/chats";
import ChatListItem from "./chat-list-item";

export default function ChatList() {
  return chatsData.map((chat) => (
    <ChatListItem
      key={chat.id}
      iconSrc={chat.chatIconSrc}
      title={chat.title}
      lastMessage={chat.lastMessage}
    />
  ));
}
