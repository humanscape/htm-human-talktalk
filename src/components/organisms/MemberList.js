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
  clickable,
}) => {
  const dispatch = useMemberDispatch();
  return (
    <>
      <TabHeader title={title} />
      <Wrapper>
        {members.map(member => <Member onClick={clickable ? () => dispatch({ type: "TOGGLE_ABSENT", name: member.name }) : null} member={member} key={member.name} />)}
      </Wrapper>
    </>
  );
};

export default MemberList;
