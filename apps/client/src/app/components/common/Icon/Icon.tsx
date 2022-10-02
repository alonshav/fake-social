import React from 'react';
import { ReactComponent as AccountIcon } from '../../../../assets/icons/account-icon.svg';
import { ReactComponent as HomeIcon } from '../../../../assets/icons/home-icon.svg';
import { ReactComponent as NetworkIcon } from '../../../../assets/icons/network-icon.svg';
import { ReactComponent as LoveIcon } from '../../../../assets/icons/love-icon.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/icons/search-icon.svg';
import styled from 'styled-components';


interface Props {
  type: string;
  className?: string;
  fill?: string;
  height?: string;
  width?:string
  image?:string
}

const getIconByType = ({ type, height, width, image }: Props) => {
  if (!type) return null;
  switch (type) {
    case 'home': {
      return (
        <HomeIcon
          className='icon'
          height={height}
        />
      );
    }
    case 'account': {
      return (
        <AccountIcon
          className='icon'
          height={height}
        />
      );
    }
    case 'network': {
      return (
        <NetworkIcon
          className='icon'
          height={height}
        />
      );
    }
    case 'love': {
      return (
        <LoveIcon
          className='icon'
          height={height}
          width={width}
        />
      );
    }
    case 'search': {
      return (
        <SearchIcon
          className='icon'
          height={height}
          width={width}
        />
      );
    }
    case 'image': {
      return (
        <StyledImage className='icon' height={height} width={width} src={image}/>
      )
    }
    default:
      return null;
  }
};
const Icon = (props: Props) => {
  return getIconByType(props);
};

const StyledImage = styled.img`
  min-height: ${props => props.height};
  border-radius: 50%;
`
export default Icon;
