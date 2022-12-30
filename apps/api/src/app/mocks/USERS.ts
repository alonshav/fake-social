import { IUser, UserRole } from '@types';


export const USERS: IUser[] = [
  {
    id: '1',
    nickname: 'Beitz',
    firstname: 'Alon',
    lastname:'Shavit',
    email: 'alonshavv@gmail.com',
    profilePicture: 'https://www.w3schools.com/w3css/img_lights.jpg',
    role: UserRole.admin
  }
];
