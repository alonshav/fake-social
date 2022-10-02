export interface IActionItem {
  title: string,
  iconType: string,
  onClick?: () => void
}

export const ActionBarItems: IActionItem[] = [
  {
    title: 'Love',
    iconType: 'favorite',
  },
  {
    title: 'Comment',
    iconType: 'comment',
  },
  {
    title: 'Share',
    iconType: 'share',
  },
  {
    title: 'Send',
    iconType: 'send',
  }
];
