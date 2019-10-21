import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from 'components/atoms/Button';
import MemberList from 'components/organisms/MemberList';
import PageTemplate from 'pages/PageTemplate';

import { useMemberState, useMemberDispatch } from 'contexts/MemberContext';

import COLORS from 'assets/colors';
import Gap from 'components/atoms/Gap';

const ButtonWrapper = styled(Button)`
  float: right;
`;

const InitPage = () => {
  const dispatch = useMemberDispatch();
  useEffect(() => {
    dispatch({ type: "VERIFY_PROPER_ACCESS" })
  }, []);

  const joinMembers = useMemberState(state => state.members.filter(member => member.absent === false));
  const absentMembers = useMemberState(state => state.members.filter(member => member.absent === true));

  return (
    <PageTemplate>
      <MemberList
        title="참석하는 휴먼"
        members={joinMembers}
        clickable={true}
      />
      <MemberList
        title="참석하지 않는 휴먼"
        members={absentMembers}
        clickable={true}
      />
      <Gap top="3rem" />
      <Link to="/match">
        <ButtonWrapper color={COLORS.BLUE[6]}>돌리기</ButtonWrapper>
      </Link>
    </PageTemplate>
  );
};

export default InitPage;
