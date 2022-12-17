import { IUser } from '@types';


export const USERS: IUser[] = [
  {
    id: '1',
    nickName: 'Beitz',
    firstName: 'Alon',
    lastName:'Shavit',
    email: 'alonshavv@gmail.com',
    profilePicture: 'https://www.w3schools.com/w3css/img_lights.jpg',
    createdAt: new Date().toISOString(),
    role: 'ADMIN'
  }
];
