import { AuthStore } from '../store/auth/types';
import { HomeStore } from '../store/home/types';
import { LayoutStore } from '../store/layout/types';
import { SearchPageStore } from '../store/searchPage/types';
import { CategoryPageStore } from '../store/categoryPage/types';
import { SideNavStore } from '../store/sidenav/types';
import { StreamPageStore } from '../store/streamPage/types';

export interface RootState {
  auth: AuthStore;
  home: HomeStore;
  searchPage: SearchPageStore;
  streamPage: StreamPageStore;
  categoryPage: CategoryPageStore;
  layout: LayoutStore;
  sideNav: SideNavStore;
}
