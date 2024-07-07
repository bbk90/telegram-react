import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  PhoneIcon as PhoneIconOutlined,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

export default function ChatFeed() {
  return (
    <div className="border-b border-gray-700 px-3 py-1 flex justify-between">
      <div>UserIcon</div>
      <div className="flex gap-6">
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
