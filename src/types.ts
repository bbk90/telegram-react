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

export interface IChat {
  id: string;
  title: string;
  icon: string;
  messages: IChatMessage[];
}
