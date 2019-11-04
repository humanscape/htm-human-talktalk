import React, { createContext, useReducer, useContext, Dispatch } from 'react';

import Maybe from 'types/Maybe';

const ModalStateContext = createContext<Maybe<State>>(undefined);
const ModalDispatchContext = createContext<Maybe<Dispatch<Action>>>(undefined);

interface State {
  isOpen: boolean;
};

type Action =
  | { type: 'SET_MODAL_STATE', isOpen: boolean }
  | { type: 'RESET' };

const getInitialState: () => State = () => ({
  isOpen: false,
});

function modalReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_MODAL_STATE':
      return {
        ...state,
        isOpen: action.isOpen,
      };
    case 'RESET':
      return getInitialState();
    default:
      throw new Error('Unhandled Action type.');
  }
}

export const ModalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, getInitialState());
  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalStateContext.Provider value={state}>
        {children}
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
};

type SelectorFunction<T> = (state: State) => T;

export const useModalState = <T extends {}>(selector?: Maybe<SelectorFunction<T>>) => {
  const state = useContext(ModalStateContext);
  if (!state) throw new Error('ModalStateContext cannot be provided.');

  if (!selector) {
    throw new Error('Cannot resolve selector.');
  }
  return selector(state);
};

export const useModalDispatch = () => {
  const dispatch = useContext(ModalDispatchContext);
  if (!dispatch) throw new Error('ModalDispatchContext cannot be provided.');
  return dispatch;
};
