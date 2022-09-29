import { INavItem } from './navBar.config';
import Icon from '../../common/Icon/Icon';
import Button from '../../common/Button/Button';

interface Props {
  navItem:INavItem
}
export const NavButton = ({navItem}:Props) => {
  return (
    <Button>
      <Icon type={navItem.iconType} height='30px'/>
      <span>{navItem.title}</span>
    </Button>
  );
};
