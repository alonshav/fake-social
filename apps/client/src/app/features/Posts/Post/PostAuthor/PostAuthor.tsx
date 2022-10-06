import React from 'react';
import ProfilePicture from '../../../../components/common/ProfilePicture/ProfilePicture';
import AuthorDetails from '../../../../components/common/AuthorDetails/AuthorDetails';
import { IPost } from '@types';
import { StyledPostAuthor } from '../../../../styles/PostAuthor.styled';

interface PostAuthor{
  post:IPost
}

function PostAuthor({post}:PostAuthor) {
  return (
    <StyledPostAuthor>
      <ProfilePicture userPicture={post.author.profile_picture} userNickname={post.author.nick_name} />
      <AuthorDetails userName={post.author.full_name} userNickName={post.author.nick_name} />
    </StyledPostAuthor>
  );
}

export default PostAuthor;
