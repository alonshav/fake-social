import React from 'react';
import DropdownItem from './DropdownItem';
import Icon from '../Icon/Icon';
import { StyledDropdownMenu } from '../../../styles/DropdownMenu.styled';
import { useAppDispatch } from '../../../hooks/store/useAppDispatch';
import { clearUser } from '../../../features/User/userSlice';



const DropdownMenu = React.forwardRef((props,ref:React.Ref<HTMLDivElement>) => {

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.clear();
  };

  return (
    <StyledDropdownMenu className='dropdown' ref={ref} >
      <DropdownItem leftIcon={<Icon type='logout' height='30px'/>} onClick={handleLogout}>
        <span className='title'>Logout</span>
      </DropdownItem>
    </StyledDropdownMenu>
  )
})

export default DropdownMenu;
