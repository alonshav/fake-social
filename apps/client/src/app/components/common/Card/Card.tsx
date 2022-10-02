import React from 'react';
import { StyledCard } from '../../styles/Card.styled';

interface CardProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: (_: any) => any;
  className?:string
}

function Card({children, onClick}:CardProps) {
  return (
    <StyledCard className='styledCard'>
      {children}
    </StyledCard>
  )
}

export default Card;
