import React from 'react';
import { PostActionBarButton } from './PostActionBarButton';
import { IPost } from '@types';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { selectIsUserReacted, toggleReaction } from '../../postsSlice';
import { useAppSelector } from '../../../../hooks/useAppSelector';

interface PostLikeButtonProps {
  post: IPost;
}

function PostLike({ post }: PostLikeButtonProps) {

  const dispatch = useAppDispatch();

  const isUserReacted = useAppSelector((state) => selectIsUserReacted(state, post.id));

  const handleLikeClick = () => {
    dispatch(toggleReaction({ id: post.id, reaction: 'like' }));
  };

  return (
    <PostActionBarButton title='Like' iconType='favorite' isActionClicked={isUserReacted} onActionClick={handleLikeClick} />
  );
}

export default PostLike;
