import React from 'react';
import { StyledPostReactionBar } from '../../../../styles/PostReactionBar.styled';
import { IPost, Reaction } from '@types';

interface PostReactionStatusProps {
  post: IPost;
}

function PostReactionStatus({ post }: PostReactionStatusProps) {

  const reactions = Object.keys(post.reactions) as Reaction[]

  return (
    <StyledPostReactionBar className-='post-reaction-bar'>
      {reactions.map((reaction) => {
        if (post.reactions[reaction] > 0) {
          return  (
            <div className='reaction' key={reaction}>
              <span className='reaction-count'>{post.reactions[reaction]}</span>
              <span className='material-symbols-outlined icon'>favorite</span>
            </div>
          );
        } else {
          return null;
        }
      })}
    </StyledPostReactionBar>
  );
}

export default PostReactionStatus;
