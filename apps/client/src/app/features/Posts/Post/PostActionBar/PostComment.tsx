import React from 'react';
import { PostActionBarButton } from './PostActionBarButton';
import { IPost } from '@types';
import { useAppDispatch } from '../../../../shared/hooks/store/useAppDispatch';

interface PostLikeButtonProps{
  post:IPost
}

function PostComment({post}:PostLikeButtonProps) {

  const dispatch = useAppDispatch()

  const handleLikeClick = () => {
    return null
  };

  return (
    <PostActionBarButton title='Comment' iconType='comment' onActionClick={handleLikeClick} isActionClicked={false}/>
  );
}

export default PostComment;
