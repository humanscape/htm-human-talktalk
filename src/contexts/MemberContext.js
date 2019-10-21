import React, { createContext, useReducer, useContext } from 'react';
import { getInitialMembersState } from 'assets/members';

const MemberStateContext = createContext(undefined);
const MemberDispatchContext = createContext(undefined);

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
      return state;
    default:
      throw new Error('Unhandled Action type.');
  }
}

export const MemberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(memberReducer, { members: getInitialMembersState(), matchedMembers: [] });
  return (
    <MemberDispatchContext.Provider value={dispatch}>
      <MemberStateContext.Provider value={state}>
        {children}
      </MemberStateContext.Provider>
    </MemberDispatchContext.Provider>
  );
};

export const useMemberState = () => {
  const state = useContext(MemberStateContext);
  if (!state) throw new Error('MemberStateContext cannot be provided.');
  return state;
};

export const useMemberDispatch = () => {
  const dispatch = useContext(MemberDispatchContext);
  if (!dispatch) throw new Error('MemberDispatchContext cannot be provided.');
  return dispatch;
};
