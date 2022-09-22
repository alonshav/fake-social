import * as express from 'express';
import {POSTS} from "../models/PostModel";

const postsRouter = express.Router();

postsRouter.get('/', (req, res, next) => {
  res.send(POSTS)
  next()
})

export default postsRouter
