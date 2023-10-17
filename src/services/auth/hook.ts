import { useDispatch } from 'react-redux';
import { authActions, selectAuthState } from '~Root/services/auth/slice';
import { useAppSelector } from '~Root/config';

export const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useAppSelector(selectAuthState);

  const logout = async () => {
    dispatch(authActions.logout());
  };

  return {
    logout,
    auth: authState.auth!,
    isCompleted: authState.isCompleted,
  };
};
