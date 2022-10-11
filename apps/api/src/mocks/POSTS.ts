import { IPost } from '@types';

export const POSTS: IPost[] = [
  {
    author: {
      nickName: 'Beitz',
      firstName: 'Alon Shavit',
      profilePicture: 'https://www.w3schools.com/w3css/img_lights.jpg',
      author_id: 'asdfa11s'
    },
    reactions:{
      like: 0
    },
    title: 'Fake Social Is Live',
    topic: 'web development',
    text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    ups: 10,
    image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    id: '0asdfasdf',
    createdAt: new Date().toISOString(),
    isUserReacted: false
  },
  {
    author: {
      nickName: 'Tut',
      firstName: 'Reut Shavit',
      profilePicture: 'https://images.unsplash.com/photo-1448873897790-40ede9ce481d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      author_id: 'asdf11a11s'
    },
    reactions:{
      like: 0
    },
    title: 'Fake Social Is Live',
    topic: 'web development',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    id: '1asdfasdf',
    ups: 10,
    image: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80',
    createdAt: new Date().toISOString(),
    isUserReacted: false
  },

  {
    author: {
      nickName: 'Tatti',
      firstName: 'Nina Shavit',
      profilePicture: 'https://www.w3schools.com/w3css/img_lights.jpg',
      author_id: 'asdf11a11s'
    },
    reactions:{
      like: 0
    },
    title: 'Fake Social Is Live',
    topic: 'web development',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    id: '2asdfasdf',
    ups: 10,
    createdAt: new Date().toISOString(),
    isUserReacted: false
  },
  {
    author: {
      nickName: 'NMC',
      firstName: 'Noam Cohen',
      profilePicture: 'https://www.w3schools.com/w3css/img_lights.jpg',
      author_id: 'asdf11a11s'
    },
    reactions:{
      like: 0
    },
    title: 'Fake Social Is Live',
    topic: 'web development',
    text: 'Sup Y\'all!',
    id: '3asdfsadf',
    ups: 10,
    createdAt: new Date().toISOString(),
    isUserReacted: false
  },
  {
    author: {
      nickName: 'Pit',
      firstName: 'Ben Litman',
      profilePicture: 'https://images.unsplash.com/photo-1448873897790-40ede9ce481d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      author_id: 'asdsf11a1111s'
    },
    reactions:{
      like: 0
    },
    title: 'Fake Social Is Live',
    topic: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    id: '4asdfasdf',
    ups: 10,
    createdAt: new Date().toISOString(),
    isUserReacted: false
  }
];
