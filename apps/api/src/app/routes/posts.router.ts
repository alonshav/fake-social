import { Router } from 'express';
import postsController from '../controllers/posts.controller';

const postsRouter = Router();


postsRouter.get('/', postsController.getAllPosts);
postsRouter.post('/',postsController.IPostToDbModels, postsController.addPost);

export default postsRouter;
