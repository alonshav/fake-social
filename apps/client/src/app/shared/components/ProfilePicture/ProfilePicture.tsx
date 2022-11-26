import React from 'react';
import { StyledProfilePicture } from '../../../styles/ProfilePicture.styled';

interface ProfilePictureProps {
  userPicture: string | undefined
  userNickname: string
}

function ProfilePicture({ userPicture, userNickname }: ProfilePictureProps) {
  return (
    <StyledProfilePicture href={`users/${userNickname}`}>
      {userPicture
      ? <img src={userPicture} />
      : <img src='https://www.w3schools.com/w3css/img_snowtops.jpg' />}
    </StyledProfilePicture>
  );
}

export default ProfilePicture;
