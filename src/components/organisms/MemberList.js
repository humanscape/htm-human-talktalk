import React from 'react';
import styled from 'styled-components';

import TabHeader from 'components/morecules/TabHeader';
import Member from 'components/morecules/Member';
import { useMemberDispatch } from 'contexts/MemberContext';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MemberList = ({
  members,
  title,
  onClick,
}) => {
  const dispatch = useMemberDispatch();
  return (
    <>
      <TabHeader title={title} />
      <Wrapper>
        {members.map(member => <Member onClick={() => dispatch({ type: "TOGGLE_ABSENT", name: member.name })} member={member} key={member.name} />)}
      </Wrapper>
    </>
  );
};

export default MemberList;
