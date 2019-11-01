import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from 'components/atoms/Button';
import MemberList from 'components/organisms/MemberList';
import PageTemplate from 'pages/PageTemplate';

import { useMemberState, useMemberDispatch } from 'contexts/MemberContext';

import COLORS from 'assets/colors';
import Gap from 'components/atoms/Gap';
import { GroupizeStyle } from 'utils/arrayUtils';

const BottomWrapper = styled.div`
  float: right;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  margin-bottom: 4rem;
`;

const SelectWrapper = styled.select`
  font-size: 1.25rem;
  margin-right: 0.5rem;
`;

const Text = styled.div`
  margin-right: 1rem;
`;

const InitPage: React.FC = () => {
  const dispatch = useMemberDispatch();
  useEffect(() => {
    dispatch({ type: "VERIFY_PROPER_ACCESS" });
    // eslint-disable-next-line
  }, []);

  const joinMembers = useMemberState(state => state.members.filter(member => member.absent === false));
  const absentMembers = useMemberState(state => state.members.filter(member => member.absent === true));
  const size = useMemberState(state => state.size);
  const style = useMemberState(state => state.style);

  const numbers = useMemo(() => {
    const array = [];
    for (let i = 2; i <= 8; i++) {
      array.push(i);
    }
    return array;
  }, []);

  const handleSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "CHANGE_SIZE", size: parseInt(event.target.value) });
  };

  const handleStyle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "CHANGE_STYLE", style: event.target.value as GroupizeStyle });
  };

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
      <BottomWrapper>
        <SelectWrapper onChange={handleSize} value={size}>
          {numbers.map(i => <option key={`option_${i}`} value={i}>{i}</option>)}
        </SelectWrapper>
        <Text>명씩</Text>
        <SelectWrapper onChange={handleStyle} value={style}>
          <option value="ceil">올림해서</option>
          <option value="floor">내림해서</option>
          <option value="round">반올림해서</option>
        </SelectWrapper>
        <Link to="/match">
          <Button color={COLORS.BLUE[6]}>돌리기</Button>
        </Link>
      </BottomWrapper>
    </PageTemplate>
  );
};

export default InitPage;
