import { IUser } from '@types';


export const USERS: IUser[] = [
  {
    nickName: 'Beitz',
    firstName: 'Alon',
    lastName:'Shavit',
    profilePicture: 'https://www.w3schools.com/w3css/img_lights.jpg',
    id: '100',
    createdAt: new Date().toISOString(),
    role: 'user'
  }
];
