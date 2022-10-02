
export interface INavItem {
  title: string,
  iconType: string,
  image?:string
  onClick?:()=>any
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
    title: 'Me',
    route: 'account',
    iconType: 'image',
    image:'https://www.w3schools.com/w3css/img_lights.jpg'
  },
];
