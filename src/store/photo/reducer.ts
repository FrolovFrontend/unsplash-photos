import { IPhoto } from '../photosList/actions';
import { Reducer } from 'redux';
import {
  IPhotoLikeAction,
  IPhotoRequestAction,
  IPhotoRequestErrorAction,
  IPhotoRequestSuccessAction,
  IPhotoResetAction,
  PHOTO_LIKE,
  PHOTO_REQUEST,
  PHOTO_REQUEST_ERROR,
  PHOTO_REQUEST_SUCCESS,
  PHOTO_RESET,
} from './actions';
import { initialState } from '../reducer';

export interface IPhotoState {
  photo: Partial<IPhoto> | IPhoto;
  isLoading: boolean;
  error: string;
}

type TPhotoActions =
  IPhotoRequestAction
  | IPhotoRequestSuccessAction
  | IPhotoRequestErrorAction
  | IPhotoResetAction
  | IPhotoLikeAction;

export const photoReducer: Reducer<IPhotoState, TPhotoActions> = (state = initialState.photo, action) => {
  switch (action.type) {
    case PHOTO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PHOTO_REQUEST_SUCCESS:
      return {
        ...state,
        photo: action.photo,
        isLoading: false,
      };
    case PHOTO_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case PHOTO_RESET:
      return {
        ...state,
        photo: {},
      };
    case PHOTO_LIKE:
      return {
        ...state,
        photo: {
          ...state.photo,
          liked_by_user: true,
        }
      };
    default:
      return {
        ...state,
      };
  }
};