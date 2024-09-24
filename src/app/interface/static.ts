import { IChat } from './chat';
import { IMessage } from './message';
import { IUser } from './user';

export const users: IUser[] = [
  {
    id: 1,
    username: 'john_doe',
    avatar:
      'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/05/anh-meme-meo-13.jpg',
    chats: [],
  },
  {
    id: 2,
    username: 'jane_smith',
    avatar:
      'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/05/anh-meme-meo-20.jpg',
    chats: [],
  },
  {
    id: 3,
    username: 'will_smith',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdre2pfIk3QhEHCZMHO7V453PDUppahe4_kQ&s',
    chats: [],
  },
];

export const messages: IMessage[] = [
  {
    id: 1,
    content: 'Hello, how are you?',
    date: '2024-09-19T10:00:00Z',
    userSend: users[0],
    userReceived: users[1],
    chatId: 1,
    replyMessage: [],
  },
  {
    id: 2,
    content: "I'm good, thanks! How about you?",
    date: '2024-09-19T10:05:00Z',
    userSend: users[2],
    userReceived: users[0],
    chatId: 1,
    replyMessage: [],
  },
  {
    id: 3,
    content: "I'm not good",
    date: '2024-09-19T10:05:00Z',
    userSend: users[1],
    userReceived: users[2],
    chatId: 1,
    replyMessage: [
      {
        id: 4,
        content: "What's wrong?",
        date: '2024-09-19T10:05:00Z',
        userSend: users[1],
        userReceived: users[1],
        chatId: 1,
        replyMessage: [],
      },
      {
        id: 5,
        content: 'r u Ok?',
        date: '2024-09-19T10:05:00Z',
        userSend: users[0],
        userReceived: users[0],
        chatId: 1,
        replyMessage: [],
      },
    ],
  },
];

export const chats: IChat[] = [
  {
    id: 1,
    messages: messages,
    member: [users[0], users[1]],
  },
];

// Gán các chat vào User
users[0].chats = [chats[0]];
users[1].chats = [chats[0]];
