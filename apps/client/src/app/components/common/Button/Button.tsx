import React from 'react';
import { StyledButton } from '../../styles/Button.styled';

interface ButtonProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  text?: string;
  onClick?: (_: any) => any;
  className?:string
  type?: "button" | "submit" | "reset" | undefined
}

const Button: React.FC<ButtonProps> = ({children,className, text,type }) => {
  return (
    <StyledButton className={className && className} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
