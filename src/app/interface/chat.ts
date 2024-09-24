import { IMessage } from "./message";
import { IUser } from "./user";


export interface IChat {
  id?: number;
  messages?: IMessage[];
  member?: IUser[];
}
