import React from 'react';
import ProfilePicture from '../../../../shared/components/ProfilePicture/ProfilePicture';
import AuthorDetails from '../../../../shared/components/AuthorDetails/AuthorDetails';
import { IPost } from '@types';
import { StyledPostAuthor } from '../../../../styles/PostAuthor.styled';

interface PostAuthor{
  post:IPost
}

function PostAuthor({post}:PostAuthor) {
  return (
    <StyledPostAuthor>
      <ProfilePicture userPicture={post.author.profilePicture} userNickname={post.author.nickName} />
      <AuthorDetails userName={post.author.firstName} userNickName={post.author.nickName} />
    </StyledPostAuthor>
  );
}

export default PostAuthor;
