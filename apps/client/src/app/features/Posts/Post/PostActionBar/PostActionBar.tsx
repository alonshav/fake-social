import React from 'react';
import { StyledActionBar } from '../../../../styles/ActionBar.styled';
import { IPost } from '@types';
import PostLike from './PostLike';
import PostComment from './PostComment';
import PostShare from './PostShare';
import PostSend from './PostSend';

interface PostActionBarProps {
  post: IPost
}
function PostActionBar({post}:PostActionBarProps) {
  return (
    <StyledActionBar>
      <PostLike post={post}/>
      <PostComment post={post}/>
      <PostShare post={post}/>
      <PostSend post={post}/>
    </StyledActionBar>
  );
}

export default PostActionBar;
