import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';

function RequireAuth() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return (
    isAuthenticated
      ? <Outlet />
      : <Navigate to='/login' state={{ from: location }} replace />
  );
}

export default RequireAuth;
