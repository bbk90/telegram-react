interface Props {
  id: string;
  iconSrc: string;
  title: string;
  lastMessage: string;
  isSelected: boolean;
  onChatClick: (id: string) => void;
}

export default function ChatListItem({
  id,
  title,
  lastMessage,
  iconSrc,
  isSelected,
  onChatClick,
}: Props) {
  function handleChatClick() {
    onChatClick(id);
  }
  return (
    <div
      onClick={handleChatClick}
      className={`flex h-20 p-2 gap-4 border-b border-gray-700 ${
        isSelected ? "bg-blue-secondary" : "bg-inherit"
      }`}
    >
      <img src={iconSrc} alt="chatIcon" className="rounded-full" />
      <div>
        <p className="text-base">{title}</p>
        <p className="text-sm line-clamp-2 text-gray-text-secondary">
          {lastMessage}
        </p>
      </div>
    </div>
  );
}
