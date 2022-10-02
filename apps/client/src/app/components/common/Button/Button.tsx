import React from 'react';
import { StyledButton } from '../../styles/Button.styled';

interface ButtonProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  text?: string;
  onClick?: (_: any) => any;
  className?:string
}

const Button: React.FC<ButtonProps> = ({children,className, text }) => {
  return (
    <StyledButton className={className && className}>
      {children}
    </StyledButton>
  );
};

export default Button;
