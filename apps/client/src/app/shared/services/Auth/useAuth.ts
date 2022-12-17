import { useAppSelector } from '../../../store/useAppSelector';
import { selectIsAuthenticated } from '../../../store/auth.slice';

function useAuth() {

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return {
    isAuthenticated
  };
}

export default useAuth;
