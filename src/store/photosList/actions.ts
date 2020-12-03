import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducer';
import { unsplash } from '../../utils/unsplash';
import { toJson } from 'unsplash-js';

export const PHOTOS_LIST_REQUEST = 'PHOTOS_LIST_REQUEST';

export interface IPhotosListRequestAction {
  type: typeof PHOTOS_LIST_REQUEST;
}

export const photosListRequest: ActionCreator<IPhotosListRequestAction> = () => ({
  type: PHOTOS_LIST_REQUEST,
});

export const PHOTOS_LIST_REQUEST_SUCCESS = 'PHOTOS_LIST_REQUEST_SUCCESS';

export interface IPhoto {
  id: string;
  color: string;
  urls: {
    regular: string;
  };
  liked_by_user: boolean;
  user: {
    username: string;
    profile_image: {
      small: string;
    }
  }
}

export type TPhotosListData = Array<IPhoto>;

export interface IPhotosListRequestSuccessAction {
  type: typeof PHOTOS_LIST_REQUEST_SUCCESS;
  photosData: TPhotosListData;
}

export const photosListRequestSuccess: ActionCreator<IPhotosListRequestSuccessAction> = (
  photosData: TPhotosListData,
) => ({
  type: PHOTOS_LIST_REQUEST_SUCCESS,
  photosData,
});

export const PHOTOS_LIST_REQUEST_ERROR = 'PHOTOS_LIST_REQUEST_ERROR';

export interface IPhotosListRequestErrorAction {
  type: typeof PHOTOS_LIST_REQUEST_ERROR;
  error: string;
}

export const photosListRequestError: ActionCreator<IPhotosListRequestErrorAction> = (error: string) => ({
  type: PHOTOS_LIST_REQUEST_ERROR,
  error,
});

export const PHOTOS_LIST_SET_PAGE = 'PHOTOS_LIST_SET_PAGE';

export interface IPhotosListSetPageAction {
  type: typeof PHOTOS_LIST_SET_PAGE;
  page: number;
}

export const photosListSetPage: ActionCreator<IPhotosListSetPageAction> = (page: number) => ({
  type: PHOTOS_LIST_SET_PAGE,
  page,
});

export const photosListRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (
  dispatch, getState,
) => {
  dispatch(photosListRequest());
  unsplash.photos
    .listPhotos(getState().photos.pageCount, 20, 'latest')
    .then(toJson)
    .then((json) => {
      dispatch(photosListRequestSuccess(json));
      dispatch(photosListSetPage(getState().photos.pageCount));
    })
    .catch((error) => {
      dispatch(photosListRequestError(String(error)));
    });
};