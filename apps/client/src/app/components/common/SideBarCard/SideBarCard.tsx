import React from 'react';
import { ISideBarCard } from '../../layout/SideBar/sideBar.config';
import { PostHeader } from '../../../styles/PostHeader.styled';
import { CardContent } from '../../../styles/CardContent.styled';
import { CardFooter } from '../../../styles/CardFooter.styled';
import { Card } from '../../../styles/Card.styled';

interface Props {
  sideBarCard:ISideBarCard
}

function SideBarCard({sideBarCard}:Props) {
  return (
    <Card>
      <PostHeader>
        <h4>{sideBarCard.title}</h4>
      </PostHeader>
      <CardContent>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default SideBarCard;
