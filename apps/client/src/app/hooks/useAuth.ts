import { useAppSelector } from './store/useAppSelector';
import { selectCurrentUser } from '../features/User/userSlice';

function useAuth() {

  const authenticatedUser = useAppSelector(selectCurrentUser)

  return {
    isAuthenticated : (!!authenticatedUser)
  };
}

export default useAuth;
