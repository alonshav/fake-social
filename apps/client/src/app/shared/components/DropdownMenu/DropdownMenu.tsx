import React from 'react';
import DropdownItem from './DropdownItem';
import Icon from '../Icon/Icon';
import { StyledDropdownMenu } from '../../../styles/DropdownMenu.styled';
import { useAppDispatch } from '../../../store/useAppDispatch';
import { clearUser } from '../../../features/User/userSlice';
import axios from 'axios';



const DropdownMenu = React.forwardRef((props,ref:React.Ref<HTMLDivElement>) => {

  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(clearUser());
    localStorage.clear();
    const res = await axios.get('http://localhost:3333/api/auth/logout')
    console.log('res:', res);
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
