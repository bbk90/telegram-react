import {
  XCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { APPEARENCE_MODES } from "../constants/appearance";

export default function NotSelectedChatInfo() {
  const [isAppearenceSettings, setIsAppearenceSettings] = useState(false);
  return (
    <div className="bg-dark-secondary h-full flex justify-center items-center">
      <div
        onClick={() => setIsAppearenceSettings(!isAppearenceSettings)}
        className="bg-dark-main rounded-full p-[2px] absolute right-2 top-2"
      >
        {isAppearenceSettings ? (
          <XCircleIcon width={24} height={24} strokeWidth={0.8} />
        ) : (
          <InformationCircleIcon width={24} height={24} strokeWidth={0.8} />
        )}
      </div>
      {isAppearenceSettings ? (
        <div className="bg-dark-main rounded-xl p-4 text-center">
          <p className="mb-4">Appearance</p>
          {/* TODO: Implement switching system/dark/light modes */}
          <div className="flex gap-4 mb-4">
            {APPEARENCE_MODES.map((appearanceMode) => {
              const Icon = appearanceMode.icon;
              const isSelected = appearanceMode.name === "Dark";
              return (
                <div
                  key={appearanceMode.name}
                  className={`flex gap-2 border-2 justify-center items-center rounded-full w-[100px] px-2 py-[1px] cursor-pointer ${
                    isSelected ? "border-blue-main" : "border-gray-100"
                  } ${isSelected ? "text-blue-main" : "text-white"}`}
                >
                  {
                    <Icon
                      width={24}
                      height={24}
                      stroke={isSelected ? "#55A4F8" : "#FFF"}
                    />
                  }
                  <span>{appearanceMode.name}</span>
                </div>
              );
            })}
          </div>
          {/* TODO: Implement other features from this block */}
        </div>
      ) : (
        <span className="bg-dark-main py-1 px-2 rounded-full text-sm select-none">
          Select a chat to start messaging
        </span>
      )}
    </div>
  );
}
