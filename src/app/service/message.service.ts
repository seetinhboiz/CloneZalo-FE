import { Injectable, signal } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { environment } from '../environment';
import { IChat } from '../interface/chat';
import { IMessage } from '../interface/message';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  // State open/close sidenav
  isOpenThread = signal<boolean>(false);

  // Main message in thread compopnent
  messageThread = signal<IMessage>({});

  idAuto = signal<number>(10);

  // Firebase
  app = initializeApp(environment.firebase);

  // Initialize Cloud Firestore and get a reference to the service
  db = getFirestore(this.app);

  // data signal
  chats = signal<IChat[]>([]);

  users = signal<IUser[]>([]);

  messagesByChatId = signal<IMessage[]>([]);

  async getChats() {
    const querySnapshot = await getDocs(collection(this.db, 'chats'));
    querySnapshot.forEach((doc) => {
      this.chats.update((value) => [...value, doc.data()]);
    });
  }

  async getUsers() {
    const querySnapshot = await getDocs(collection(this.db, 'users'));
    querySnapshot.forEach((doc) => {
      this.users.update((value) => [...value, doc.data()]);
    });
  }

  async getMessages() {
    const q = query(collection(this.db, 'messages'), where('chatId', '==', 1));
    onSnapshot(q, (querySnapshot) => {
      const messages: IMessage[] = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data() as IMessage);
      });
      this.messagesByChatId.update(() => messages);
    });
  }

  async initData() {
    await this.getChats();
    this.getUsers();
    this.getMessages();
  }

  async updateMessage(threadId: number, data: IMessage) {
    try {
      const q = query(
        collection(this.db, 'messages'),
        where('id', '==', threadId)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (docSnapshot) => {
        const docRef = docSnapshot.ref;

        await setDoc(docRef, data, { merge: true });
      });
    } catch (error) {
      console.log(error);
    }
  }

  async addMessages(message: IMessage) {
    try {
      const docRef = await addDoc(collection(this.db, 'messages'), message);
      this.messagesByChatId.update(() => []);
      this.getMessages();
      console.log('Message added with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding messages: ', e);
    }
  }

  sendMessage(newMessage: IMessage, type?: string) {
    if (type === 'MESSAGE') {
      this.addMessages(newMessage);
    } else if (type === 'REPLYMESSAGE') {
      const messageThreadId = this.messageThread().id;
      if (messageThreadId) {
        this.messagesByChatId().map((message) => {
          if (message.id === messageThreadId) {
            const newReply = {
              ...message,
              replyMessage: [...(message.replyMessage || []), newMessage],
            };
            this.updateMessage(messageThreadId, newReply);
            this.messageThread.update(() => newReply);
            this.messagesByChatId.update(() => []);
            this.getMessages();
          }
        });
      }
    }
  }
}
