interface ICloudAPI {
  url: string;
  login: string;
  password: string;
  id: string;
  name: string;
}

export enum EChannelType {
  Viber = 12,
  Telegram = 5,
}

export enum ECloudAPIId {
  Yandex = 'yandex',
  Google = 'google',
}

interface IChannel {
  type: number;
  id: string;
  route: string;
}

export interface ISettings {
  cloudAPIs: ICloudAPI[];
  channels: IChannel[];
}

export interface IMessage {
  id: string;
  text: string;
  status: boolean;
}

export interface IConversation {
  id: string;
  channelId: string;
  messages: IMessage[];
}
