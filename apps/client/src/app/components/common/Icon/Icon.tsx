import React from 'react';
import { ReactComponent as AccountIcon } from '../../../../assets/icons/account-icon.svg';
import { ReactComponent as HomeIcon } from '../../../../assets/icons/home-icon.svg';
import { ReactComponent as NetworkIcon } from '../../../../assets/icons/network-icon.svg';


interface Props {
  type: string;
  className?: string;
  fill?: string;
  height?: string;
}

const getIconByType = ({ type,height }: Props) => {
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
    default:
      return null;
  }
};
const Icon = (props: Props) => {
  return getIconByType(props);
};

export default Icon;
