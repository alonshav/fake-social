import React from 'react';
import { ReactComponent as AccountIcon } from '../../../../assets/icons/account-icon.svg';
import { ReactComponent as HomeIcon } from '../../../../assets/icons/home-icon.svg';
import { ReactComponent as NetworkIcon } from '../../../../assets/icons/network-icon.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/icons/search-icon.svg';
import { ReactComponent as LogoutIcon } from '../../../../assets/icons/logout-icon.svg';
import styled from 'styled-components';
import { ReactionType } from '@types';
import { StyledReactionIcon } from '../../../styles/ReactionIcon.styled';

interface Props {
  type: string;
  className?: string;
  fill?: string;
  height?: string;
  width?: string;
  image?: string;
}

const getIconByType = ({ type, height, width, image, className }: Props) => {
  if (!type) return null;
  switch (type) {
    case 'home': {
      return <HomeIcon className={className ? className : 'icon'} height={height} />;
    }
    case 'logout': {
      return <LogoutIcon className={className ? className : 'icon'} height={height} />;
    }
    case 'account': {
      return <AccountIcon className={className ? className : 'icon'} height={height} />;
    }
    case 'network': {
      return <NetworkIcon className={className ? className : 'icon'} height={height} />;
    }
    case ReactionType.love: {
      return (
        <StyledReactionIcon
          type={type}
          className={'fa-solid fa-heart ' + className}
        ></StyledReactionIcon>
      );
    }
    case ReactionType.like: {
      return (
        <StyledReactionIcon
          type={type}
          className={'fa-solid fa-thumbs-up ' + className}
        ></StyledReactionIcon>
      );
    }
    case ReactionType.celebrate: {
      return (
        <StyledReactionIcon
          type={type}
          className={'fa-solid fa-cake-candles ' + className}
        ></StyledReactionIcon>
      );
    }
    case ReactionType.funny: {
      return (
        <StyledReactionIcon
          type={type}
          className={'fa-solid fa-face-laugh-squint ' + className}
        ></StyledReactionIcon>
      );
    }
    case ReactionType.sad: {
      return (
        <StyledReactionIcon
          type={type}
          className={'fa-solid fa-face-sad-cry ' + className}
        ></StyledReactionIcon>
      );
    }
    case 'search': {
      return (
        <SearchIcon className={className ? className : 'icon'} height={height} width={width} />
      );
    }
    case 'image': {
      return (
        <StyledImage
          className={className ? className : 'icon'}
          height={height}
          width={width}
          src={image}
        />
      );
    }
    default:
      return null;
  }
};


const Icon = (props: Props) => {
  return getIconByType(props);
};

const StyledImage = styled.img`

  min-height: ${(props) => props.height};
  border-radius: 50%;
`;
export default Icon;
