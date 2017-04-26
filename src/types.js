// @flow
export type AppState = {
  count: number,
};

export type Action =
    { type: 'increment-counter' }
  | { type: 'decrement-counter' }
  ;

export type Dispatch = (action: Action) => void;

export type AppContext = {
  appState: AppState,
  dispatch: Dispatch,
};
