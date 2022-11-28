import { useDispatch } from 'react-redux';
import { AppDispatch } from './rootStore';

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch
