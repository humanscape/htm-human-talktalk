import React, { useEffect } from 'react';

import PageTemplate from 'pages/PageTemplate';

import ErrorBox from 'components/morecules/ErrorBox';
import MemberList from 'components/organisms/MemberList';

import { useMemberDispatch, useMemberState } from 'contexts/MemberContext';

import misaeError from 'assets/img/misae-error.png';

const MatchPage = () => {
  const dispatch = useMemberDispatch();
  useEffect(() => {
    dispatch({ type: 'MATCH_MEMBERS' });
  }, []);

  const directAccess = useMemberState(state => state.directAccess);
  const matchedMembers = useMemberState(state => state.matchedMembers);

  return (
    <PageTemplate>
      {directAccess
        ? <ErrorBox image={misaeError} title="에러" text="직접 접근은 불가능해요. 메인 화면으로 돌아가서 올바른 동작을 실행해주세요." />
        : matchedMembers.map((matchSet, i) => <MemberList key={`team_${i + 1}`} members={matchSet} title={`그룹 ${i + 1}`} clickable={false} />)
      }
    </PageTemplate>
  );
};

export default MatchPage;
