import { IChat } from './chat';

export interface IUser {
  id?: number;
  username?: string;
  avatar?: string;
  chats?: IChat[];
}
