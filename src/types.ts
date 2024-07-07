export interface IChatMessageSender {
  id: number;
  name: string;
  icon: string;
}

export interface IChatMessage {
  id: number;
  sender: IChatMessageSender;
  message: string;
}

export interface IChat {
  id: number;
  title: string;
  icon: string;
  messages: IChatMessage[];
}
