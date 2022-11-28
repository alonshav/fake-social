import React from 'react';
import { PostActionBarButton } from './PostActionBarButton';
import { IPost } from '@types';
import { useAppDispatch } from '../../../../store/useAppDispatch';
import { selectHasUserReacted, toggleReaction } from '../../postsSlice';
import { useAppSelector } from '../../../../store/useAppSelector';

interface PostLikeButtonProps {
  post: IPost;
}

function PostLike({ post }: PostLikeButtonProps) {

  const dispatch = useAppDispatch();

  const isUserReacted = useAppSelector((state) => selectHasUserReacted(state, post.id));

  const handleLikeClick = () => {
    dispatch(toggleReaction({ id: post.id, reaction: 'like' }));
  };

  return (
    <PostActionBarButton title='Like' iconType='favorite' isActionClicked={isUserReacted} onActionClick={handleLikeClick} />
  );
}

export default PostLike;
