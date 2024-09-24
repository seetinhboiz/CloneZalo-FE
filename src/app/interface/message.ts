import { IUser } from './user';

export interface IMessage {
  id?: number;
  content?: string;
  date?: string;

  // Avatar display this
  userSend?: IUser;

  // Unnecessary fiel
  userReceived?: IUser;

  chatId?: number;
  replyMessage?: IMessage[];
}
