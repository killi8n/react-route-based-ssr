import { handleActions, Action } from 'redux-actions';
import { Reducer } from 'redux';
import produce from 'immer';
import * as api from 'lib/api';
import createPromiseThunk from 'lib/createPromiseThunk';

const GET_THUMBNAIL = 'profile/GET_THUMBNAIL';
const GET_THUMBNAIL_PENDING = 'profile/GET_THUMBNAIL_PENDING';
const GET_THUMBNAIL_SUCCESS = 'profile/GET_THUMBNAIL_SUCCESS';
const GET_THUMBNAIL_ERROR = 'profile/GET_THUMBNAIL_ERROR';

export const profileActions = {
  getThumbnail: createPromiseThunk(GET_THUMBNAIL, api.getThumbnail)
};

type GetThumbnailPayload = {
  data: {
    thumbnail: string;
  };
};

export type ProfileState = {
  thumbnail: string;
  loading: boolean;
};

const initialState: ProfileState = {
  thumbnail: '',
  loading: false
};

const reducer: Reducer = handleActions<ProfileState, any>(
  {
    [GET_THUMBNAIL_SUCCESS]: (state: ProfileState, action: Action<GetThumbnailPayload>) => {
      return produce(state, draft => {
        if (!action.payload) {
          return;
        }
        const { thumbnail } = action.payload.data;
        draft.thumbnail = thumbnail;
        draft.loading = false;
      });
    },
    [GET_THUMBNAIL_PENDING]: (state: ProfileState) => {
      return {
        ...state,
        loading: true
      };
    }
  },
  initialState
);

export default reducer;
