import {
  TPhotosListData,
  IPhotosListRequestAction,
  IPhotosListRequestErrorAction,
  IPhotosListRequestSuccessAction,
  IPhotosListSetPageAction,
  PHOTOS_LIST_REQUEST,
  PHOTOS_LIST_REQUEST_ERROR,
  PHOTOS_LIST_REQUEST_SUCCESS,
  PHOTOS_LIST_SET_PAGE,
} from './actions';
import { Reducer } from 'redux';
import { initialState } from '../reducer';

export interface IPhotosListState {
  photosData: TPhotosListData;
  isLoading: boolean;
  error: string;
  pageCount: number;
}

type TPhotosListActions =
  IPhotosListRequestAction |
  IPhotosListRequestSuccessAction |
  IPhotosListRequestErrorAction |
  IPhotosListSetPageAction

export const photosListReducer: Reducer<IPhotosListState, TPhotosListActions> = (state = initialState.photos, action) => {
  switch (action.type) {
    case PHOTOS_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PHOTOS_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        photosData: action.photosData,
        isLoading: false,
      };
    case PHOTOS_LIST_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case PHOTOS_LIST_SET_PAGE:
      return {
        ...state,
        pageCount: action.page + 1,
      };
    default:
      return state;
  }
};