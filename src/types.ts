export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string;
  phone: string;
  status: "online" | "offline";
  lastSeen: string;
}
export type ChatType = "dm | group | channel";

export interface IChat {
  id: string;
  type: ChatType;
  title: string;
  icon: string;
  messages: IChatMessage[];
  followersCount: number | null;
}

export interface IChatMessageSender {
  id: string;
  name: string;
  icon: string;
}

export interface IChatMessage {
  id: string;
  sender: IChatMessageSender;
  message: string;
}
