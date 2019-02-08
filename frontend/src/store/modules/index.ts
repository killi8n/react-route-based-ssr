import profile, { ProfileState } from './profile';
import repos, { ReposState } from './repos';
import { combineReducers } from 'redux';

export default combineReducers({
  profile,
  repos
});

export type State = {
  profile: ProfileState;
  repos: ReposState;
};
