import React from 'react';
import { IPost } from '@types';
import { PostHeader } from '../../../styles/PostHeader.styled';
import PostActionBar from './PostActionBar/PostActionBar';
import { PostContent } from '../../../styles/PostContent.styled';
import { PostFooter } from '../../../styles/PostFooter.styled';
import { StyledPost } from '../../../styles/Post.styled';
import { StyledButton } from '../../../styles/Button.styled';
import { PostTimestamp } from './PostTimeAgo/PostTimestamp';
import PostAuthor from './PostAuthor/PostAuthorProps';
import PostReactionsStatus from './PostReactionBar/PostReactionBar';

interface PostProps {
  post: IPost;
  onPostClick?: (postId: string) => void;
  className?: string;
}

function Post({ post, onPostClick, className }: PostProps) {
  const handlePostClick = () => {
    if (onPostClick) {
      onPostClick(post.id);
    }
  };

  return (
    <StyledPost className={className && className}>
      <PostHeader>
        <div className="post-details">
          <PostAuthor post={post} />
          <PostTimestamp timestamp={post.createdAt} />
        </div>
        <StyledButton className="followButton">+Follow</StyledButton>
      </PostHeader>

      <PostContent onClick={handlePostClick}>
        {post.title && <h4 className="post-title">{post.title}</h4>}
        <p className="text-container">{post.text}</p>
        <div className="image-container">
          {post?.images?.map((image) => <img src={image}/>)}
        </div>
      </PostContent>

      <PostFooter>
        {post.reactions && <PostReactionsStatus post={post} />}
        <PostActionBar post={post} />
      </PostFooter>
    </StyledPost>
  );
}

export default Post;
