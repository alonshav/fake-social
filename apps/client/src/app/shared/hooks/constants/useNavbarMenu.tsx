import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';

export interface INavItem {
  title: string,
  iconType: string,
  route: string
  image?: string
  dropdown?: boolean
}

export function useNavbarMenu () {

  const navigationMenu: INavItem[] = [
    {
      title: 'Home',
      iconType: 'home',
      route: 'home',
    },
    {
      title: 'Network',
      iconType: 'network',
      route: 'network',
    },
    {
      title: 'Me',
      route: '#',
      iconType: 'image',
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
      dropdown: true
    }
  ];
  return {
    navigationMenu
  }
}

