interface Props {
  iconSrc: string;
  title: string;
  lastMessage: string;
}

export default function ChatListItem({ title, lastMessage, iconSrc }: Props) {
  return (
    <div className="flex h-20 p-2 gap-4 border-b border-gray-700">
      <img src={iconSrc} alt="chatIcon" className="rounded-full" />
      <div>
        <p className="text-base">{title}</p>
        <p className="text-sm line-clamp-2">{lastMessage}</p>
      </div>
    </div>
  );
}
