import React from 'react';
import Icon from '../../shared/components/Icon/Icon';
import { StyledNavButton } from '../../styles/Buttons/StyledNavButton.styled';
import { INavItem } from './useNavbarMenu';

interface Props {
  item: INavItem;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode
}

export const NavButton:React.FC<Props> = ({ item, className,onClick, children }) => {
  return (
    <StyledNavButton className={className && className} onClick={onClick}>
      <Icon type={item.iconType} height='30px' width='30px' image={item.image} className={className && className} />
      <span className='icon-text'>{item.title}</span>
      {children}
    </StyledNavButton>
  );
};
