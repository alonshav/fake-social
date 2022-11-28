import React from 'react';
import { PostActionBarButton } from './PostActionBarButton';
import { IPost } from '@types';
import { useAppDispatch } from '../../../../store/useAppDispatch';

interface PostLikeButtonProps{
  post:IPost
}

function PostShare({post}:PostLikeButtonProps) {

  const dispatch = useAppDispatch()

  const handleShareClick = () => {
    return null
  };

  return (
    <PostActionBarButton title='Share' iconType='share' onActionClick={handleShareClick} isActionClicked={false}/>
  );
}

export default PostShare;
