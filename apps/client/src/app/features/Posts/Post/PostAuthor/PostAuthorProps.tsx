import React from 'react';
import ProfilePicture from '../../../../shared/components/ProfilePicture/ProfilePicture';
import AuthorDetails from '../../../../shared/components/AuthorDetails/AuthorDetails';
import { IPost } from '@types';
import { StyledPostAuthor } from '../../../../styles/PostAuthor.styled';

interface PostAuthorProps {
  post:IPost
}

function PostAuthor({post}:PostAuthorProps) {
  return (
    <StyledPostAuthor>
      <ProfilePicture userPicture={post?.author?.profilePicture} userNickname={post?.author?.nickname} />
      <AuthorDetails userName={post?.author?.firstname} userNickName={post?.author?.nickname} />
    </StyledPostAuthor>
  );
}

export default PostAuthor;
