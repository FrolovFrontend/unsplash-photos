import { Reducer } from 'redux';
import { ISetTokenAction, SET_TOKEN } from './actions';
import { IPhotosListState, photosListReducer } from './photosList/reducer';
import {
  IPhotosListRequestAction,
  IPhotosListRequestErrorAction,
  IPhotosListRequestSuccessAction,
  IPhotosListSetPageAction,
  PHOTOS_LIST_REQUEST,
  PHOTOS_LIST_REQUEST_ERROR,
  PHOTOS_LIST_REQUEST_SUCCESS,
  PHOTOS_LIST_SET_PAGE,
} from './photosList/actions';
import { IPhotoState, photoReducer } from './photo/reducer';
import {
  IPhotoLikeAction,
  IPhotoRequestAction,
  IPhotoRequestErrorAction,
  IPhotoRequestSuccessAction,
  IPhotoResetAction,
  IPhotoUnlikeAction,
  PHOTO_LIKE,
  PHOTO_REQUEST,
  PHOTO_REQUEST_ERROR,
  PHOTO_REQUEST_SUCCESS,
  PHOTO_RESET,
  PHOTO_UNLIKE,
} from './photo/actions';

export interface RootState {
  token: string;
  photos: IPhotosListState;
  photo: IPhotoState;
}

export const initialState: RootState = {
  token: '',
  photos: {
    isLoading: false,
    error: '',
    pageCount: 1,
    photosData: [],
  },
  photo: {
    isLoading: false,
    error: '',
    photo: {},
  },
};

type TActions =
  ISetTokenAction
  | IPhotosListRequestAction
  | IPhotosListRequestSuccessAction
  | IPhotosListRequestErrorAction
  | IPhotosListSetPageAction
  | IPhotoRequestAction
  | IPhotoRequestSuccessAction
  | IPhotoRequestErrorAction
  | IPhotoResetAction
  | IPhotoLikeAction
  | IPhotoUnlikeAction;

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
    case PHOTO_REQUEST:
    case PHOTO_REQUEST_SUCCESS:
    case PHOTO_REQUEST_ERROR:
    case PHOTO_RESET:
    case PHOTO_LIKE:
    case PHOTO_UNLIKE:
      return {
        ...state,
        photo: photoReducer(state.photo, action),
      };
    default:
      return state;
  }
};