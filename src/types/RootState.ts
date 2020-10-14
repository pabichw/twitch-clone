import { AuthStore } from '../store/auth/types';
import { HomeStore } from '../store/home/types';
import { LayoutStore } from '../store/layout/types';
import { SearchPageStore } from '../store/searchPage/types';

export interface RootState {
  auth: AuthStore;
  home: HomeStore;
  searchPage: SearchPageStore;
  layout: LayoutStore;
}
