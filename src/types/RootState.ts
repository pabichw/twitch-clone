import { AuthStore } from '../store/auth/types';
import { HomeStore } from '../store/home/types';
import { LayoutStore } from '../store/layout/types';

export interface RootState {
  auth: AuthStore;
  home: HomeStore;
  layout: LayoutStore;
}
