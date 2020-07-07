import { IState } from '../interfaces';

import { IExampleState } from './interfaces';

const getState = (state: IState): IExampleState => state.exampleReducer;

export const getReducerState = (state: IState) => {
  const localeState = getState(state);
  return localeState;
};
