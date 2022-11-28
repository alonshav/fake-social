import React from 'react';
import { StyledProfilePicture } from '../../../styles/ProfilePicture.styled';
import { Link, useNavigate } from 'react-router-dom';

interface ProfilePictureProps {
  userPicture: string | undefined;
  userNickname: string;
}

function ProfilePicture({ userPicture, userNickname }: ProfilePictureProps) {

  return (
    <StyledProfilePicture>
      <Link to={`/${userNickname}`}>
        {userPicture
          ? <img src={userPicture} />
          : <img src='https://www.w3schools.com/w3css/img_snowtops.jpg' />}
      </Link>
    </StyledProfilePicture>
  );
}

export default ProfilePicture;
