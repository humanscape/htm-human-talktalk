import React from 'react';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import Member from 'components/morecules/Member';
import TabHeader from 'components/morecules/TabHeader';
import PageHeader from 'components/morecules/PageHeader';
import { useMemberState, useMemberDispatch } from 'contexts/MemberContext';

const ContentWrapper = styled.div`
  margin-top: 7rem;
  margin-bottom: 4rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InitPage = () => {
  const { members } = useMemberState();
  const dispatch = useMemberDispatch();
  return (
    <Container>
      <PageHeader />
      <ContentWrapper>
        <TabHeader title="참석하는 휴먼" />
        <Wrapper>
          {members.map(member => !member.absent && <Member onClick={() => dispatch({ type: 'TOGGLE_ABSENT', name: member.name })} member={member} key={member.name} />)}
        </Wrapper>
        <TabHeader title="참석하지 않는 휴먼" />
        <Wrapper>
          {members.map(member => member.absent && <Member onClick={() => dispatch({ type: 'TOGGLE_ABSENT', name: member.name })} member={member} key={member.name} />)}
        </Wrapper>
      </ContentWrapper>
    </Container>
  );
};

export default InitPage;
