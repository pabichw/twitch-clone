import { AuthStore } from '../store/auth/types';
import { HomeStore } from '../store/home/types';

export interface RootState {
  auth: AuthStore;
  home: HomeStore;
}
