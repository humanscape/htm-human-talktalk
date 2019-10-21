import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from 'components/atoms/Container';
import Button from 'components/atoms/Button';
import MemberList from 'components/organisms/MemberList';

import { useMemberState } from 'contexts/MemberContext';

import COLORS from 'assets/colors';

const ContentWrapper = styled.div`
  margin-top: 7rem;
  margin-bottom: 4rem;
`;

const ButtonWrapper = styled(Button)`
  float: right;
`;

const InitPage = () => {
  const joinMembers = useMemberState(state => state.members.filter(member => member.absent === false));
  const absentMembers = useMemberState(state => state.members.filter(member => member.absent === true));
  return (
    <Container>
      <ContentWrapper>
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
      </ContentWrapper>
      <Link to="/match">
        <ButtonWrapper color={COLORS.BLUE[6]}>돌리기</ButtonWrapper>
      </Link>
    </Container>
  );
};

export default InitPage;
