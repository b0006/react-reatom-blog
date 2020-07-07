export interface IExampleState {
  loading: boolean;
  error: Error | string | null | undefined;
}

export interface IExampleAction {
  type: string;
  payload?: IExampleState;
}
