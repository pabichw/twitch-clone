import { AuthStore } from '../store/auth/types';
import { HomeStore } from '../store/home/types';
import { LayoutStore } from '../store/layout/types';
import { SearchPageStore } from '../store/searchPage/types';
import { CategoryPageStore } from '../store/categoryPage/types';
import { SideNavStore } from '../store/sidenav/types';

export interface RootState {
  auth: AuthStore;
  home: HomeStore;
  searchPage: SearchPageStore;
  categoryPage: CategoryPageStore;
  layout: LayoutStore;
  sideNav: SideNavStore;
}
