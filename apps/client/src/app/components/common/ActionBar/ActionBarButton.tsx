import { IActionItem } from './actionBar.config';
import { StyledActionButton } from '../../styles/ActionButton.styled';

interface Props {
  item: IActionItem;
}

export const ActionBarButton = ({ item }: Props) => {
  return (
    <StyledActionButton>
      <span className='material-symbols-outlined icon'>{item.iconType} </span>
      <span className='icon-text'>{item.title}</span>
    </StyledActionButton>
  );
};
