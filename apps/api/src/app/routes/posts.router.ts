import * as express from 'express';
import { POSTS } from '../mocks/POSTS';

const postsRouter = express.Router();

postsRouter.get('/', (req, res, next) => {
  res.send(POSTS)
  next()
})

export default postsRouter
