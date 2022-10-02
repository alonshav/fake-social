import { INavItem } from './navBar.config';
import Icon from '../../common/Icon/Icon';
import { StyledNavButton } from '../../styles/NavButton.styled';

interface Props {
  item: INavItem;
}

export const NavButton = ({ item }: Props) => {
  return (
    <StyledNavButton>
      <Icon type={item.iconType} height='30px' width='30px' image={item.image} />
      <span className='icon-text'>{item.title}</span>
    </StyledNavButton>
  );
};
