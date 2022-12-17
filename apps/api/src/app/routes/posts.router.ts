import { Router } from 'express';
import postsController from '../controllers/posts.controller';

const postsRouter = Router();

postsRouter.use(postsController.postToDbModel);
postsRouter.get('/', postsController.getAllPosts);
postsRouter.post('/', postsController.addPost);

export default postsRouter;
