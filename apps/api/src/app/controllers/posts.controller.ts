import dbAdapter from '../adapters/base.db.adapter';
import { RequestHandler } from 'express';
import postDbAdapter from '../adapters/post.db.adapter';
import { Posts } from '@types';


export const IPostToDbModels: RequestHandler = (req, res, next) => {
  const { post } = req.body;
  if (post) {
    const postModel: Posts = {
      id: post?.id,
      user_id: post?.author.id,
      text: post?.text,
      created_at: post?.created_at ? post.created_at : new Date(),
      updated_at: new Date()
    };
    req.body.postModel = postModel;
    next();
  } else {
    res.status(400).json({ msg: 'Post Not Received' });
  }
};

const getAllPosts: RequestHandler = async (req, res, next) => {
  try {
    const posts = await postDbAdapter.getAllPosts();
    res.status(200).json({ posts: posts });
  } catch (e) {
    res.status(400).json({ errorMessage: e.msg });
  }
  next();
};

const addPost: RequestHandler = async (req, res) => {
  const { postModel } = req.body;
  console.log('postModel :', postModel);
  try {
    const post = await dbAdapter.addRow<Posts>('posts', postModel);
    res.status(201).json({ msg: 'post was created successfully', post });
  } catch (e) {
    res.status(400).json({ error: e.msg });
  }
};

export default {
  getAllPosts,
  IPostToDbModels,
  addPost
};
