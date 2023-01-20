import MyProfile from './MyProfile/MyProfile';
import React from 'react';

export interface ISideBarCard {
  title: string;
  component: React.FC
}

export const LeftSideBarMenu: ISideBarCard[] = [
  {
    title: 'My Profile',
    component: MyProfile,
  },
];

export const RightSideBarMenu: ISideBarCard[] = [
];
