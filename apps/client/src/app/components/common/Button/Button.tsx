import React from 'react';
import { StyledButton } from '../../styles/Button.styled';

interface ButtonProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  text?: string;
  onClick?: (_: any) => any;
}

const Button: React.FC<ButtonProps> = ({ children, text }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};

export default Button;
