import { EXAMPLE_ACTION } from './constants';
import { IExampleState, IExampleAction } from './interfaces';

const initialState: IExampleState = {
  loading: false,
  error: null,
};

export default function exampleReducer(state = initialState, action: IExampleAction): IExampleState {
  switch (action.type) {
    case EXAMPLE_ACTION.REQUEST:
      return { loading: true, error: null };
    case EXAMPLE_ACTION.SUCCESS:
      return { loading: false, error: null };
    case EXAMPLE_ACTION.FAILURE:
      return { loading: false, error: action.payload?.error };
    default:
      return state;
  }
}
