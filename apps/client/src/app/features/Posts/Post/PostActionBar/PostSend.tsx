import React from 'react';
import { PostActionBarButton } from './PostActionBarButton';
import { IPost } from '@types';
import { useAppDispatch } from '../../../../hooks/store/useAppDispatch';

interface PostLikeButtonProps{
  post:IPost
}

function PostSend({post}:PostLikeButtonProps) {

  const dispatch = useAppDispatch()

  const handleSendClick = () => {
    return null
  };

  return (
    <PostActionBarButton title='Send' iconType='send' onActionClick={handleSendClick} isActionClicked={false}/>
  );
}

export default PostSend;
