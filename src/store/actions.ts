import { ActionCreator } from 'redux';

export const SET_TOKEN = 'SET_TOKEN';
export interface ISetTokenAction {
  type: typeof SET_TOKEN;
  token: string;
}
export const setToken: ActionCreator<ISetTokenAction> = (token: string) => {
  return {
    type: SET_TOKEN,
    token,
  };
};
