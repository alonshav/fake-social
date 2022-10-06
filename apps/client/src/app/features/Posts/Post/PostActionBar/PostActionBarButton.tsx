import { StyledPostActionBarButton } from '../../../../styles/ActionButton.styled';

interface Props {
  title: string;
  iconType: string;
  isActionClicked: boolean;
  onActionClick: () => void;
}

export const PostActionBarButton = ({ title, iconType, onActionClick, isActionClicked }: Props) => {

  const handleClick = () => {
    onActionClick();
  };

  console.log('isActionClicked:', isActionClicked);
  return (
    <StyledPostActionBarButton className='post-action-bar-button' onClick={handleClick} isClicked={isActionClicked}>
      <span className='material-symbols-outlined icon'>{iconType}</span>
      <span className='icon-text'>{title}</span>
    </StyledPostActionBarButton>
  );
};
