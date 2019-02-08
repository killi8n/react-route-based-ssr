import { handleActions, Action } from 'redux-actions';
import { Reducer } from 'redux';
import produce from 'immer';
import * as api from 'lib/api';
import createPromiseThunk from 'lib/createPromiseThunk';

const GET_REPOS = 'repos/GET_REPOS';
const GET_REPOS_PENDING = 'repos/GET_REPOS_PENDING';
const GET_REPOS_SUCCESS = 'repos/GET_REPOS_SUCCESS';
const GET_REPOS_ERROR = 'repos/GET_REPOS_ERROR';

export const reposActions = {
  getRepos: createPromiseThunk(GET_REPOS, api.getRepos)
};

export type RepoType = {
  title: string;
  url: string;
};

type GetReposPayload = {
  data: {
    repos: RepoType[];
  };
};

export type ReposState = {
  repos: RepoType[];
  loading: boolean;
};

const initialState: ReposState = {
  repos: [],
  loading: false
};

const reducer: Reducer = handleActions<ReposState, any>(
  {
    [GET_REPOS_SUCCESS]: (state: ReposState, action: Action<GetReposPayload>) => {
      return produce(state, draft => {
        if (!action.payload) {
          return;
        }
        const { repos } = action.payload.data;
        draft.repos = repos;
        draft.loading = false;
      });
    },
    [GET_REPOS_PENDING]: (state: ReposState) => {
      return {
        ...state,
        loading: true
      };
    }
  },
  initialState
);

export default reducer;
