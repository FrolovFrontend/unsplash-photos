import { Action, ActionCreator } from 'redux';
import { IPhoto } from '../photosList/actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducer';
import { unsplash } from '../../utils/unsplash';
import { toJson } from 'unsplash-js';

export const PHOTO_REQUEST = 'PHOTO_REQUEST';

export interface IPhotoRequestAction {
  type: typeof PHOTO_REQUEST;
}

export const photoRequest: ActionCreator<IPhotoRequestAction> = () => ({
  type: PHOTO_REQUEST,
});

export const PHOTO_REQUEST_SUCCESS = 'PHOTO_REQUEST_SUCCESS';

export interface IPhotoRequestSuccessAction {
  type: typeof PHOTO_REQUEST_SUCCESS;
  photo: IPhoto;
}

export const photoRequestSuccess: ActionCreator<IPhotoRequestSuccessAction> = (photo: IPhoto) => ({
  type: PHOTO_REQUEST_SUCCESS,
  photo,
});

export const PHOTO_REQUEST_ERROR = 'PHOTO_REQUEST_ERROR';

export interface IPhotoRequestErrorAction {
  type: typeof PHOTO_REQUEST_ERROR;
  error: string;
}

export const photoRequestError: ActionCreator<IPhotoRequestErrorAction> = (error: string) => ({
  type: PHOTO_REQUEST_ERROR,
  error,
});

export const PHOTO_RESET = 'PHOTO_RESET';

export interface IPhotoResetAction {
  type: typeof PHOTO_RESET;
}

export const photoReset: ActionCreator<IPhotoResetAction> = () => ({
  type: PHOTO_RESET,
});

export const photoRequestAsync = (id: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  dispatch(photoRequest());
  unsplash.photos
    .getPhoto(id)
    .then(toJson)
    .then(res => {
      dispatch(photoRequestSuccess(res));
    })
    .catch(error => {
      dispatch(photoRequestError(String(error)));
    });
};
