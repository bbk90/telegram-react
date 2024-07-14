import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  PhoneIcon as PhoneIconOutlined,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ChatContext } from "../context/chat-context";

export default function ChatFeed() {
  const { selectedChat } = useContext(ChatContext);
  return (
    <div className="border-b border-gray-700 px-3 py-1 flex justify-between items-center">
      <div className="flex gap-3">
        <img
          src={selectedChat?.icon}
          alt="user-icon"
          className="w-12 rounded-full"
        />
        <div>
          <p>{selectedChat?.title}</p>
          <p className="text-sm text-gray-text-secondary">
            300,000 subscribers
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        {/* TODO: Make PhoneIconOutlined icon render logic like: chatType == 'dm' && PhoneIconOutlined  */}
        <PhoneIconOutlined width={24} height={24} stroke="#55A4F8" />
        <MagnifyingGlassIcon width={24} height={24} fill="#55A4F8" />
        <EllipsisHorizontalIcon
          width={24}
          height={24}
          stroke="#55A4F8"
          strokeWidth={2}
        />
      </div>
    </div>
  );
}
