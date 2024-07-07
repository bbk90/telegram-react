import {
  PencilSquareIcon,
  UserCircleIcon,
  PhoneIcon,
  ChatBubbleOvalLeftIcon,
  CogIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  PhoneIcon as PhoneIconOutlined,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { chatsData } from "./data/chats";
import NotSelectedChatInfo from "./components/not-selected-chat-info";
import ChatList from "./components/chat-list";

function App() {
  return (
    <div className="h-screen flex">
      <aside className="hidden border-r border-gray-700 grow max-w-[400px] sm:flex flex-col">
        <div className="border-b border-gray-700 py-3">
          <div className="relative flex justify-center mb-4">
            <div className="flex gap-2">
              <div className="flex">
                <div className="size-6 bg-slate-300 rounded-xl translate-x-3" />
                <div className="size-6 bg-slate-400 rounded-xl" />
              </div>
              <span>Chats</span>
            </div>
            <PencilSquareIcon
              width={22}
              height={22}
              fill="#55A4F8"
              className="absolute right-3 top-0 cursor-pointer"
            />
          </div>
          {/* TODO: Make it looks like Telegram search */}
          <div className="px-2">
            <input
              type="text"
              className="bg-dark-secondary w-full rounded-md px-2 py-1 outline-none placeholder:text-center"
              placeholder="Search (⌘K)"
            />
          </div>
        </div>
        <div className="grow overflow-y-auto scrollbar scrollbar-thumb-slate-300 scrollbar-track-dark-main">
          <ChatList />
        </div>
        <div className="border-t border-gray-700 flex justify-between px-8 py-4">
          <UserCircleIcon
            width={24}
            height={24}
            fill={"#B4C2D3"}
            className="cursor-pointer"
          />
          <PhoneIcon
            width={24}
            height={24}
            fill="#B4C2D3"
            className="cursor-pointer"
          />
          <ChatBubbleOvalLeftIcon
            width={24}
            height={24}
            fill="#55A4F8"
            className="cursor-pointer"
          />
          <CogIcon
            width={24}
            height={24}
            fill="#B4C2D3"
            className="cursor-pointer"
          />
        </div>
      </aside>
      <main className="grow min-w-[350px]">
        <NotSelectedChatInfo />
        {/* <div className="border-b border-gray-700 px-3 py-1 flex justify-between">
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
        </div> */}
      </main>
    </div>
  );
}

export default App;
