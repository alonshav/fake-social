import React from 'react';
import styled from 'styled-components';

interface DropdownItemProps {
  leftIcon: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  onClick: () => void;
}

const StyledDropdownItem = styled.button`
  & {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    transition: background 0.1s;
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  &:active {
    color: ${({ theme }) => theme.color.primary}
  }

  .icon-button {
    .icon {
      margin: 0;
    }
  }

`;

function DropdownItem({ onClick, children, leftIcon, rightIcon }: DropdownItemProps) {
  return (
    <StyledDropdownItem className='menu-item' onClick={onClick}>
      <span className='icon-button'>{leftIcon}</span>
      <span className='title'>{children}</span>
      <span className='icon-button'>{rightIcon}</span>
    </StyledDropdownItem>
  )
}

export default DropdownItem;
