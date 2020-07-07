import { Dispatch } from 'redux';

import { EXAMPLE_ACTION } from './constants';
import { IExampleState } from './interfaces';

export const exampleAction = () => {
  return (dispatch: Dispatch<{ type: string; payload?: Partial<IExampleState> }>) => {
    dispatch({ type: EXAMPLE_ACTION.REQUEST });
    // eslint-disable-next-line no-constant-condition
    if (true) {
      dispatch({ type: EXAMPLE_ACTION.SUCCESS });
    } else {
      dispatch({ type: EXAMPLE_ACTION.FAILURE, payload: { error: 'text of error' } });
    }
  };
};
