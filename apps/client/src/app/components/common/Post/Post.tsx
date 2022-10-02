import React from 'react';
import { IPost } from '@types';
import { PostHeader } from '../../styles/PostHeader.styled';
import { CardFooter } from '../../styles/CardFooter.styled';
import Button from '../Button/Button';
import Card from '../Card/Card';
import ActionBar from '../ActionBar/ActionBar';
import { PostContent } from '../../styles/PostContent.styled';
import { PostFooter } from '../../styles/PostFooter';
import { StyledPost } from '../../styles/Post.styled';

interface PostProps {
  post: IPost;
}

function Post({ post }: PostProps) {

  return (
    <StyledPost>
      <PostHeader>
        <a className='profilePicture'>{post.author_picture
          ? <img src={post.author_picture} />
          : <img src='https://www.w3schools.com/w3css/img_snowtops.jpg' />}
        </a>
        <div className='postDetails'>
          <h4 className='userName'>{post.author_nickName}</h4>
          <h5 className='userMoto'>{post.author_fullName}</h5>
          <span className='timePosted'>4h</span>
        </div>
        <Button className='followButton'>+Follow</Button>
      </PostHeader>
      <PostContent>
        <p className='text-container'>{post.text}</p>
        <div className='image-container'>{post.image && <img src={post.image}/>}</div>
      </PostContent>
      <PostFooter>
        <ActionBar />
      </PostFooter>
    </StyledPost>
  );
}

export default Post;
