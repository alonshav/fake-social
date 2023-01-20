import React from 'react';
import { Card } from '../../../styles/Card.styled';
import { ISideBarCard } from '../sideBar.config';
import { CardContent } from '../../../styles/CardContent.styled';
import { CardHeader } from '../../../styles/CardHeader.styled';

interface Props {
  card:ISideBarCard
  children?:React.ReactNode
}

function SideBarCard({card,children}:Props) {
  return (
    <Card>
      <CardHeader>{card.title}</CardHeader>
      <CardContent><card.component/></CardContent>
      {children}
    </Card>
  );
}

export default SideBarCard;
