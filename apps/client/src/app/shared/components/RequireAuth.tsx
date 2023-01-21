import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/useAppSelector';
import { selectIsAuthenticated } from '../../store/auth.slice';

function RequireAuth() {

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const location = useLocation();

  return (
    (isAuthenticated)
      ? <Outlet />
      : <Navigate to='/login' state={{ from: location }} replace />
  );
}

export default RequireAuth;
