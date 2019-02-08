import { Introduction, Profile, Repositories } from 'pages';
import { bindActionCreators } from 'redux';
import { profileActions } from 'store/modules/profile';
import { reposActions } from 'store/modules/repos';

export type RouteType = {
  path: string;
  component: any;
  preload?: any;
};

const routes: RouteType[] = [
  {
    path: '/',
    component: Introduction
  },
  {
    path: '/profile',
    component: Profile,
    preload: (store: any, params: any) => {
      const ProfileActions = bindActionCreators(profileActions, store.dispatch);
      return ProfileActions.getThumbnail();
    }
  },
  {
    path: '/repos',
    component: Repositories,
    preload: (store: any, params: any) => {
      const ReposActions = bindActionCreators(reposActions, store.dispatch);
      return ReposActions.getRepos();
    }
  }
];

export default routes;
