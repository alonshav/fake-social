import React from 'react';
import { StyledAuthorDetails } from '../../../../styles/UserDetails.styled';
import { Link } from 'react-router-dom';

interface UserDetailsProps {
  userNickName: string,
  userName: string,
}

function AuthorDetails({ userNickName, userName }: UserDetailsProps) {
  return (
    <StyledAuthorDetails>
      <Link to={`/${userNickName}`}><h4 className='user-name'>{userNickName}</h4></Link>
      <h5 className='user-moto'>{userName}</h5>
    </StyledAuthorDetails>
  );
}

export default AuthorDetails;
