import React from 'react';
import { IPost } from '@types';
import { StyledPost } from '../../styles/Post.styled';
import { PostHeader } from '../../styles/PostHeader.styled';
import { PostContent } from '../../styles/PostContent.styled';
import { PostFooter } from '../../styles/PostFooter.styled';
import Button from '../Button/Button';

interface PostProps {
  post: IPost;
}

function Post({ post }: PostProps) {

  return (
    <StyledPost>
      <PostHeader>
        <a>PIC</a>
        <div className='PostDetails'>
          <h4>UserName</h4>
          <p>UserMoto</p>
          <span>4h</span>
        </div>
        <Button>Follow</Button>
      </PostHeader>
      <PostContent>
        <p>{post.content}</p>
      </PostContent>
      <PostFooter>
        <span>ups:{post.ups}</span>
      </PostFooter>
    </StyledPost>
  );
}

export default Post;
