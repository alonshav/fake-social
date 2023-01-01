import React from 'react';
import { StyledPostReactionBar } from '../../../../styles/PostReactionBar.styled';
import { IPost, ReactionType } from '@types';
import StyledIcon from '../../../../shared/components/Icon/Icon';

interface PostReactionStatusProps {
  post: IPost;
}

function PostReactionBar({ post }: PostReactionStatusProps) {
  const reactionTypes = Object.keys(post.reactions) as ReactionType[];
  const reactionCount = Object.values(post.reactions).reduce((acc, count) => +acc + +count, 0);
  console.log('Object.values(post.reactions) :', Object.values(post.reactions));

  return (
    <StyledPostReactionBar className-="post-reaction-bar">
      {reactionTypes.map((reaction) => {
        if (post?.reactions?.[reaction] > 0) {
          return (
            <div className="reaction" key={reaction}>
              <StyledIcon type={reaction} />
            </div>
          );
        }
        return;
      })}
      {(reactionCount > 0) && <span className="reaction-count">{reactionCount}</span>}
    </StyledPostReactionBar>
  );
}

export default PostReactionBar;
