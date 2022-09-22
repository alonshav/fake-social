import React from 'react';
import Post from '../Post/Post';
import usePosts from '../../../hooks/usePosts';


const Posts = () => {

  const posts = usePosts()

  function renderPosts() {
    return posts?.map((post) => (
      <Post post={post} key={post.post_id} />
    ));
  }

  return (
    <div className="posts">
      {renderPosts()}
    </div>
  );
};

export default Posts;
