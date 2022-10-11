import * as express from 'express';
import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';

import { ILogin } from '@types';
import { createLogin, LOGINS } from '../../mocks/LOGINS';

const authRouter = express.Router();

passport.use(new LocalStrategy((username, password, done) => {
  const userLogin = LOGINS.find(user => user.nickName === username);
  if (!userLogin) return done(null, false, { message: 'Incorrect username or password.' });
  if (userLogin.passwordHash !== password) return done(null, false);
  if (userLogin) return done(null, userLogin);
}));

passport.serializeUser((user: ILogin, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const userAuth = LOGINS.find(user => user.id === id);
  if (userAuth) {
    done(null, userAuth);
  }
});


//Auth Routes

authRouter.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.send({ user: req.user });
  next();
});

authRouter.post('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

authRouter.post('/register', async (req, res, next) => {
  const { userId, nickName, password } = req.body;
  const login = {
    nickName,
    passwordHash: 'replacewithhash',
    passwordSalt: 'salt',
    RelatedUserId: userId
  };
  const newLogin = await createLogin(login);
  if (newLogin) {
    res.status(201).json({
      msg: 'User Registered Successfully',
      newLogin
    });
  } else {
    res.status(500).json({ msg: 'User Not Registered' });
  }
});

export default authRouter;
