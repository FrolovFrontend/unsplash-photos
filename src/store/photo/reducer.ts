import { IPhoto } from '../photosList/actions';
import { Reducer } from 'redux';
import {
  IPhotoRequestAction,
  IPhotoRequestErrorAction,
  IPhotoRequestSuccessAction, IPhotoResetAction,
  PHOTO_REQUEST,
  PHOTO_REQUEST_ERROR,
  PHOTO_REQUEST_SUCCESS, PHOTO_RESET,
} from './actions';
import { initialState } from '../reducer';

export interface IPhotoState {
  photo: Partial<IPhoto>;
  isLoading: boolean;
  error: string;
}

type TPhotoActions =
  IPhotoRequestAction
  | IPhotoRequestSuccessAction
  | IPhotoRequestErrorAction
  | IPhotoResetAction

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
      }
    default:
      return {
        ...state,
      };
  }
};