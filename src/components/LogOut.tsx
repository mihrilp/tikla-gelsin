import React from 'react';
import {TouchableOpacity} from 'react-native';
import useAppNavigation from '../hooks/useAppNavigation';
import {useAppDispatch} from '../hooks/useStore';
import {logout} from '../store/user.slice';
import LogOutIcon from './icons/LogOutIcon';

function LogOut() {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <TouchableOpacity onPress={handleLogout}>
      <LogOutIcon />
    </TouchableOpacity>
  );
}

export default LogOut;
