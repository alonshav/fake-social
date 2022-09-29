
export interface INavItem {
  title: string,
  iconType: string,
  route: string
}

export const NavigationMenu: INavItem[] = [
  {
    title: 'Home',
    iconType: 'home',
    route: 'home'
  },
  {
    title: 'Network',
    iconType: 'network',
    route: 'network'
  },
  {
    title: 'Account',
    iconType: 'account',
    route: 'account'
  },
];
