import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from 'components/atoms/Button';
import Gap from 'components/atoms/Gap';
import ErrorBox from 'components/morecules/ErrorBox';
import MemberList from 'components/organisms/MemberList';

import PageTemplate from 'pages/PageTemplate';

import { useMemberDispatch, useMemberState } from 'contexts/MemberContext';

import misaeError from 'assets/img/misae-error.png';

import sendSlackMessage from 'services/sendSlackMessage';
import COLORS from 'assets/colors';

const { REACT_APP_SLACK_PASSWORD: slackPassword } = process.env;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const LabelWrapper = styled.div`
  font-size: 1.25rem;
`;

const InputWrapper = styled.input`
  font-size: 1.25rem;
`;

const MatchPage: React.FC = () => {
  const dispatch = useMemberDispatch();
  useEffect(() => {
    dispatch({ type: 'MATCH_MEMBERS' });
  }, []);

  const [password, setPassword] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSendSlack = () => {
    if (password !== slackPassword) {
      alert('비밀번호가 달라요.');
      return;
    }
    sendSlackMessage(matchedMembers);
    alert('Slack으로 결과를 전송했어요.');
  };

  const directAccess = useMemberState(state => state.directAccess);
  const matchedMembers = useMemberState(state => state.matchedMembers);

  return (
    <PageTemplate>
      {directAccess
        ? <ErrorBox image={misaeError} title="에러" text="직접 접근은 불가능해요. 메인 화면으로 돌아가서 올바른 동작을 실행해주세요." />
        : (
          <>
            {matchedMembers.map((matchSet, i) => <MemberList key={`team_${i + 1}`} members={matchSet} title={`그룹 ${i + 1}`} clickable={false} />)}
            <Gap top="3rem" />
            <BottomWrapper>
              <LabelWrapper>비밀번호: </LabelWrapper>
              <Gap left="0.5rem" />
              <InputWrapper type="password" value={password} onChange={handleChange} />
              <Gap left="0.5rem" />
              <Button color={COLORS.INDIGO[6]} onClick={handleSendSlack}>Slack에 결과 전송하기</Button>
              <Gap left="1rem" />
              <Link to="/">
                <Button color={COLORS.BLUE[6]}>메인으로 가기</Button>
              </Link>
            </BottomWrapper>
          </>
        )
      }
    </PageTemplate>
  );
};

export default MatchPage;
