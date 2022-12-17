import dbAdapter from '../adapters/base.db.adapter';
import { RequestHandler } from 'express';
import { PostModel } from '@types';


const postToDbModel: RequestHandler = (req, res, next) => {
  const { post } = req.body;
  if (post) {
    const postModel: PostModel = {
      id: post?.id,
      user_id: post?.author.id,
      text: post?.text,
      created_at: post?.created_at ? post.created_at : new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    req.body.postModel = postModel;
    next();
  } else {
    res.status(400).send('Post not received');
  }
};

const getAllPosts: RequestHandler = async (req, res, next) => {
  try {
    const posts = await dbAdapter.getAll('posts');
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
    const result = await dbAdapter.addRow<PostModel>('posts', postModel);
    res.status(201).json({ msg: 'post was created successfully' });
  } catch (e) {
    res.status(400).json({ error: e.msg });
  }
};

export default {
  getAllPosts,
  postToDbModel,
  addPost
};
