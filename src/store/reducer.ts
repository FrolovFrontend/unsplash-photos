import { Reducer } from 'redux';
import { ISetTokenAction, SET_TOKEN } from './actions';

export interface RootState {
  token: string;
}

const initialState: RootState = {
  token: '',
};

type TActions = ISetTokenAction

export const rootReducer: Reducer<RootState, TActions> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};