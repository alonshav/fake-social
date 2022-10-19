import * as express from 'express';
import * as passport from 'passport';
import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import { IUserLogin, IUser } from '@types';
import { createLogin, createUser } from '../../mocks/USER_LOGINS';
import { USERS } from '../../mocks/USERS';

const authRouter = express.Router();

//Auth Routes

authRouter.post('/login', passport.authenticate('local'), (req, res, next) => {
  console.log('******** login successful ********');
  if(req.isAuthenticated()){
    res.status(200).send({ user: req.user });
  }
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
  const { nickName, firstName, lastName, password, email } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
  const passwordSalt = 'salt'
  const userId = uuid()

  const existingNickName = USERS.find(user => (nickName === user.nickName));
  const existingEmail = USERS.find(user => (nickName === user.nickName));

  if (existingNickName) {
    res.status(500).send('NickName already exists')
  }
  else if (existingEmail) {
    res.status(500).send('Email already exists');
  }


  const login: IUserLogin = {
    id: uuid(),
    RelatedUserId: userId,
    nickName,
    passwordHash,
    passwordSalt,
  };

  const user: IUser = {
    id: userId,
    nickName,
    lastName,
    firstName,
    email,
    createdAt: new Date().toISOString(),
    profilePicture: 'https://www.w3schools.com/w3css/img_lights.jpg',
    role: 'user'
  };

  const [newLogin, newUser] = await Promise.all([createUser(user),createLogin(login)]);
  console.log('newUser:', newUser);
  console.log('newLogin:', newLogin);
  if (newLogin && newUser) {
    res.status(201).json({
      msg: 'User Registered Successfully',
    });
  } else {
    res.status(500).json({ msg: 'User not registered' });
  }
});

export default authRouter;
