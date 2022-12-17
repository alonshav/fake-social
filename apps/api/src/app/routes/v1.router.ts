import {Router} from 'express';
import isAuthenticated from '../middleware/isAuthenticated';
import postsRouter from './posts.router';
import authRouter from './auth.router';

const v1Router = Router();

v1Router.use('/posts', isAuthenticated, postsRouter);
v1Router.use('/auth', authRouter);

export default v1Router
