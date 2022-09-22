import React from 'react';
import { IPost } from '../../../../../../../libs/api-interfaces/src/lib/model-interfaces/IPost';
import './Post.css';

interface PostProps {
  post: IPost;
}
function Post({ post }: PostProps) {
  return (
    <div className="post">
      <h4>{post.author_nickName}</h4>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <footer>ups:{post.ups}</footer>
    </div>
  );
}

export default Post;
