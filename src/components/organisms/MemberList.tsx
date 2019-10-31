import React from 'react';
import styled from 'styled-components';

import TabHeader from 'components/morecules/TabHeader';
import MemberItem from 'components/morecules/MemberItem';
import { useMemberDispatch } from 'contexts/MemberContext';
import Member from 'types/Member';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  members: Member[];
  title: string;
  clickable: boolean;
};

const MemberList: React.FC<Props> = ({ members, title, clickable }) => {
  const dispatch = useMemberDispatch();
  return (
    <>
      <TabHeader title={title} />
      <Wrapper>
        {members.map(member => <MemberItem onClick={(event) => { clickable && dispatch({ type: "TOGGLE_ABSENT", name: member.name }); }} member={member} key={member.name} />)}
      </Wrapper>
    </>
  );
};

export default MemberList;
