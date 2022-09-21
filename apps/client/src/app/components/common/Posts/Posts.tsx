import React from 'react';
import { POSTS } from '../../../mocks/posts.mock';
import Post from '../Post/Post';

const Posts = () => {
  return (
    <div className="posts">
      {POSTS.map((post) => (
        <Post post={post} key={post.post_id} />
      ))}
    </div>
  );
};

export default Posts;
