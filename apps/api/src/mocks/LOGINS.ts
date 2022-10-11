import { ILogin, UserId } from '@types';
import { v4 as uuid } from 'uuid';


export const LOGINS: ILogin[] = [
  {
    id: '1',
    nickName: 'Beitz',
    passwordHash: '123',
    passwordSalt: '1123',
    RelatedUserId: 'UserId'
  }
];

//util - replace with database later
export function createLogin(login) {
  return new Promise((resolve, reject) => {
    const newLogin = {
      id: uuid(),
      ...login
    };
    LOGINS.push(newLogin);
    resolve(newLogin);
  });
};

