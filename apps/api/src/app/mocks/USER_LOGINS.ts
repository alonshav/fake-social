import { IUserLogin, IUser, UserId } from '@types';
import { USERS } from './USERS';


export const USER_LOGINS: IUserLogin[] = [
  {
    id: '1',
    nickname: 'Beitz',
    passwordHash: '$2b$10$IkvzJS3sAqRj//afFzQcSeLk3NLTSk57XQeztu/NMZtxTIIgGKtDu',
    passwordSalt: 'salt',
    RelatedUserId: '1'
  }
];

//util - replace with database later
export function createLogin(login: IUserLogin) {
  return new Promise((resolve, reject) => {
    const newLogin = {
      ...login
    };
    USER_LOGINS.push(newLogin);
    resolve(newLogin);
  });
};

export function createUser(user: IUser) {
  return new Promise((resolve, reject) => {
    const newLogin = {
      ...user
    };
    USERS.push(user);
    resolve(newLogin);
  });
};

