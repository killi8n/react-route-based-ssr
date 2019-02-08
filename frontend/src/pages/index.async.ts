import asyncComponent from '../lib/asyncComponent';

export const Introduction = asyncComponent(() => import('./Introduction'));
export const Profile = asyncComponent(() => import('./Profile'));
export const Repositories = asyncComponent(() => import('./Repositories'));
