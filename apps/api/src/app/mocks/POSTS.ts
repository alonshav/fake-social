import { IPost, UserRole } from '@types';
import { v4 as uuid } from 'uuid';

export const POSTS: IPost[] = [
  {
    id: uuid(),
    author: {
      id: '1',
      nickname: 'Beitz',
      firstname: 'Alon',
      lastname: 'Shavit',
      email: 'alonshavv@gmail.com',
      profilePicture:
        'https://images.unsplash.com/photo-1448873897790-40ede9ce481d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      role: UserRole.user,
    },
    title: 'Fake Social Is Live',
    topic: 'web development',
    text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    reactions: {
      LIKE: 0,
      LOVE: 0,
      SAD: 0,
      CELEBRATE: 0,
      FUNNY: 0,
    },
    images: ['https://www.w3schools.com/w3css/img_lights.jpg'],
    createdAt: new Date().toISOString(),
    isUserReacted: false,
  },
  {
    author: {
      id: 'asdf11a11s',
      nickname: 'Tut',
      firstname: 'Reut',
      lastname: 'Shavit',
      email: 'reutbeny@gmail.com',
      profilePicture:
        'https://images.unsplash.com/photo-1448873897790-40ede9ce481d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      role: UserRole.user,
    },
    reactions: {
      LIKE: 0,
      LOVE: 0,
      SAD: 0,
      CELEBRATE: 0,
      FUNNY: 0,
    },
    title: 'Fake Social Is Live',
    topic: 'web development',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    id: '1asdfasdf',
    images: [
      'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80',
    ],
    createdAt: new Date().toISOString(),
    isUserReacted: false,
  },

  {
    id: uuid(),
    author: {
      id: 'asdf11a11s',
      nickname: 'Tut',
      firstname: 'Reut',
      lastname: 'Shavit',
      email: 'reutbeny@gmail.com',
      profilePicture:
        'https://images.unsplash.com/photo-1448873897790-40ede9ce481d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      role: UserRole.user,
    },
    title: 'Fake Social Is Live',
    topic: 'web development',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    reactions: {
      LIKE: 0,
      LOVE: 0,
      SAD: 0,
      CELEBRATE: 0,
      FUNNY: 0,
    },
    images: [],
    createdAt: new Date().toISOString(),
    isUserReacted: false,
  },
  {
    id: '3asdfsadf',
    author: {
      id: 'asdf11a11s',
      nickname: 'Tut',
      firstname: 'Reut',
      lastname: 'Shavit',
      email: 'reutbeny@gmail.com',
      profilePicture:
        'https://images.unsplash.com/photo-1448873897790-40ede9ce481d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      role: UserRole.user,
    },
    reactions: {
      LIKE: 0,
      LOVE: 0,
      SAD: 0,
      CELEBRATE: 0,
      FUNNY: 0,
    },
    title: 'Fake Social Is Live',
    topic: 'web development',
    text: "Sup Y'all!",
    images: [],
    createdAt: new Date().toISOString(),
    isUserReacted: false,
  },
  {
    author: {
      id: 'asdf11a11s',
      nickname: 'Tut',
      firstname: 'Reut',
      lastname: 'Shavit',
      email: 'reutbeny@gmail.com',
      profilePicture:
        'https://images.unsplash.com/photo-1448873897790-40ede9ce481d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      role: UserRole.user,
    },
    reactions: {
      LIKE: 0,
      LOVE: 0,
      SAD: 0,
      CELEBRATE: 0,
      FUNNY: 0,
    },
    images: [],
    title: 'Fake Social Is Live',
    topic:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    id: '4asdfasdf',
    createdAt: new Date().toISOString(),
    isUserReacted: false,
  },
];
