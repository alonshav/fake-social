import * as LocalStrategy from 'passport-local';
import * as bcrypt from 'bcrypt';

import { USER_LOGINS } from './mocks/USER_LOGINS';
import { USERS } from './mocks/USERS';
import { IUserLogin } from '@types';

export function initializePassport(passport) {

  const authenticateUser = async (username, password, done) => {
    const userLogin = USER_LOGINS.find(login => login.nickName === username);

    if (userLogin) {
      const isPasswordValid = await bcrypt.compare(password, userLogin.passwordHash)
      const user = USERS.find(user => userLogin.RelatedUserId === user.id);
      try {
        if (user && isPasswordValid) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Bad Credentials' });
        }
      } catch (e) {
        return done(e);
      }
    }

    return done(null, false, { message: 'User not found' });
  };

  passport.use(new LocalStrategy(authenticateUser));

  passport.serializeUser((userLogin: IUserLogin, done) => {
    done(null, userLogin.id);
  });

  passport.deserializeUser((id, done) => {
    const userLogin = USER_LOGINS.find(user => user.id === id);
    if (userLogin) {
      done(null, userLogin);
    }
  });

}
