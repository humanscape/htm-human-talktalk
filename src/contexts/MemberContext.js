import React, { createContext, useReducer, useContext } from 'react';
import { getInitialMembersState } from 'assets/members';

import { shuffle, groupize } from 'utils/arrayUtils';

const MemberStateContext = createContext(undefined);
const MemberDispatchContext = createContext(undefined);

const getInitialState = () => ({
  members: getInitialMembersState(),
  matchedMembers: [],
  directAccess: true,
  size: 4,
  style: 'ceil',
});

function memberReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_ABSENT":
      return {
        ...state,
        members: state.members.map(member =>
          member.name === action.name
            ? { ...member, absent: !member.absent }
            : member
        )
      };
    case "MATCH_MEMBERS":
      if (state.directAccess) {
        return state;
      }
      const randomMembers = shuffle(state.members.filter(member => member.absent === false));
      const matchedMembers = groupize(randomMembers, state.size, state.style);
      return {
        ...state,
        matchedMembers
      };
    case "VERIFY_PROPER_ACCESS":
      return {
        ...state,
        directAccess: false,
      };
    case "CHANGE_SIZE":
      return {
        ...state,
        size: action.size,
      };
    case "CHANGE_STYLE":
      return {
        ...state,
        style: action.style,
      };
    case "RESET":
      return getInitialState();
    default:
      throw new Error('Unhandled Action type.');
  }
}

export const MemberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(memberReducer, getInitialState());
  return (
    <MemberDispatchContext.Provider value={dispatch}>
      <MemberStateContext.Provider value={state}>
        {children}
      </MemberStateContext.Provider>
    </MemberDispatchContext.Provider>
  );
};

export const useMemberState = (selector = undefined) => {
  const state = useContext(MemberStateContext);
  if (!state) throw new Error('MemberStateContext cannot be provided.');

  if (selector) {
    return selector(state);
  }
  return state;
};

export const useMemberDispatch = () => {
  const dispatch = useContext(MemberDispatchContext);
  if (!dispatch) throw new Error('MemberDispatchContext cannot be provided.');
  return dispatch;
};
