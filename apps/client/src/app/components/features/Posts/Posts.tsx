import React from 'react';
import Post from '../../common/Post/Post';
import { usePosts } from './PostsProvider';
import { StyledPosts } from '../../styles/Posts.styled';


function Posts() {

  const posts = usePosts();

  return (
    <StyledPosts>
      {posts.map((post) => <li key={post.id}><Post post={post}/></li>)}
    </StyledPosts>
  );
}

export default Posts;


