import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { getInitialMembersState } from 'assets/members';

import { shuffle, groupize, GroupizeStyle } from 'utils/arrayUtils';
import Member from 'types/Member';
import Maybe from 'types/Maybe';

const MemberStateContext = createContext<Maybe<State>>(undefined);
const MemberDispatchContext = createContext<Maybe<Dispatch<Action>>>(undefined);

interface State {
  members: Array<Member>;
  matchedMembers: Array<Array<Member>>;
  directAccess: boolean;
  size: number;
  style: GroupizeStyle;
};

type Action =
  | { type: 'TOGGLE_ABSENT', name: string }
  | { type: 'MATCH_MEMBERS' }
  | { type: 'VERIFY_PROPER_ACCESS' }
  | { type: 'CHANGE_SIZE', size: number }
  | { type: 'CHANGE_STYLE', style: GroupizeStyle }
  | { type: 'RESET' };

const getInitialState: () => State = () => ({
  members: getInitialMembersState(),
  matchedMembers: [],
  directAccess: true,
  size: 4,
  style: 'ceil',
});

function memberReducer(state: State, action: Action) {
  switch (action.type) {
    case 'TOGGLE_ABSENT':
      return {
        ...state,
        members: state.members.map(member =>
          member.name === action.name
            ? { ...member, absent: !member.absent }
            : member
        )
      };
    case 'MATCH_MEMBERS':
      if (state.directAccess) {
        return state;
      }
      const randomMembers = shuffle(state.members.filter(member => member.absent === false));
      const matchedMembers = groupize(randomMembers, state.size, state.style);
      return {
        ...state,
        matchedMembers
      };
    case 'VERIFY_PROPER_ACCESS':
      return {
        ...state,
        directAccess: false,
      };
    case 'CHANGE_SIZE':
      return {
        ...state,
        size: action.size,
      };
    case 'CHANGE_STYLE':
      return {
        ...state,
        style: action.style,
      };
    case 'RESET':
      return getInitialState();
    default:
      throw new Error('Unhandled Action type.');
  }
}

export const MemberProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(memberReducer, getInitialState());
  return (
    <MemberDispatchContext.Provider value={dispatch}>
      <MemberStateContext.Provider value={state}>
        {children}
      </MemberStateContext.Provider>
    </MemberDispatchContext.Provider>
  );
};

type SelectorFunction = (state: State) => any;

export const useMemberState: (selector: Maybe<SelectorFunction>) => State | any = (selector: Maybe<SelectorFunction>) => {
  const state = useContext(MemberStateContext);
  if (!state) throw new Error('MemberStateContext cannot be provided.');

  if (!selector) {
    return state;
  }
  return selector(state);
};

export const useMemberDispatch = () => {
  const dispatch = useContext(MemberDispatchContext);
  if (!dispatch) throw new Error('MemberDispatchContext cannot be provided.');
  return dispatch;
};
