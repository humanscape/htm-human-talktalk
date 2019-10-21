import React from 'react';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import PageHeader from 'components/morecules/PageHeader';
import MemberList from 'components/organisms/MemberList';
import { useMemberState } from 'contexts/MemberContext';

const ContentWrapper = styled.div`
  margin-top: 7rem;
  margin-bottom: 4rem;
`;

const InitPage = () => {
  const { members } = useMemberState();
  return (
    <Container>
      <PageHeader />
      <ContentWrapper>
        <MemberList
          title="참석하는 휴먼"
          members={members.filter(member => member.absent === false)}
        />
        <MemberList
          title="참석하지 않는 휴먼"
          members={members.filter(member => member.absent === true)}
        />
      </ContentWrapper>
    </Container>
  );
};

export default InitPage;
