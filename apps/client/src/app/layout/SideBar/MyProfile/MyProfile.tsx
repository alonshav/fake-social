import React from 'react';
import ProfilePicture from '../../../shared/components/ProfilePicture/ProfilePicture';
import { useAppSelector } from '../../../store/useAppSelector';
import { selectAuthenticatedUser } from '../../../store/auth.slice';


const MyProfile = () => {

  const user = useAppSelector(selectAuthenticatedUser)
  return (
    <ProfilePicture userPicture={user?.profilePicture} userNickname={user?.nickname}/>
  );
};

export default MyProfile;
