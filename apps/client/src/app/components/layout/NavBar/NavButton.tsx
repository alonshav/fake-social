import { INavItem } from './navBar.config';
import Icon from '../../common/Icon/Icon';
import { StyledNavButton } from '../../../styles/Buttons/NavButton.styled';

interface Props {
  item: INavItem;
  className?: string;
}

export const NavButton = ({ item, className }: Props) => {
  return (
    <StyledNavButton className={className && className}>
      <Icon type={item.iconType} height='30px' width='30px' image={item.image} className={className && className} />
      <span className='icon-text'>{item.title}</span>
    </StyledNavButton>
  );
};
