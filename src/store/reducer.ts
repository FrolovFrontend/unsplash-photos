import { Reducer } from 'redux';
import { ISetTokenAction, SET_TOKEN } from './actions';
import { IPhotosListState, photosListReducer } from './photosList/reducer';
import {
  IPhotosListRequestAction, IPhotosListRequestErrorAction, IPhotosListRequestSuccessAction, IPhotosListSetPageAction,
  PHOTOS_LIST_REQUEST,
  PHOTOS_LIST_REQUEST_ERROR,
  PHOTOS_LIST_REQUEST_SUCCESS,
  PHOTOS_LIST_SET_PAGE,
} from './photosList/actions';

export interface RootState {
  token: string;
  photos: IPhotosListState;
}

export const initialState: RootState = {
  token: '',
  photos: {
    isLoading: false,
    error: '',
    pageCount: 1,
    photosData: [],
  },
};

type TActions =
  ISetTokenAction |
  IPhotosListRequestAction |
  IPhotosListRequestSuccessAction |
  IPhotosListRequestErrorAction |
  IPhotosListSetPageAction;

export const rootReducer: Reducer<RootState, TActions> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case PHOTOS_LIST_REQUEST:
    case PHOTOS_LIST_REQUEST_SUCCESS:
    case PHOTOS_LIST_REQUEST_ERROR:
    case PHOTOS_LIST_SET_PAGE:
      return {
        ...state,
        photos: photosListReducer(state.photos, action),
      };
    default:
      return state;
  }
};