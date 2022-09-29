import * as express from 'express';
import {PostsMock} from "../mocks/posts.mock";

const postsRouter = express.Router();

postsRouter.get('/', (req, res, next) => {
  res.send(PostsMock)
  next()
})

export default postsRouter
