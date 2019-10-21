import React, { useEffect } from 'react';
import { useMemberDispatch, useMemberState } from 'contexts/MemberContext';

const MatchPage = () => {
  const dispatch = useMemberDispatch();
  useEffect(() => {
    dispatch({ type: 'MATCH_MEMBERS' });
  }, []);

  const directAccess = useMemberState(state => state.directAccess);
  return (
    <div>
      {directAccess}
    </div>
  );
};

export default MatchPage;
