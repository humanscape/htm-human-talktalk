import React, { MouseEvent } from 'react';
import styled, { css } from 'styled-components';

import Icon from 'components/atoms/Icon';
import Gap from 'components/atoms/Gap';

import COLORS from 'assets/colors';
import Member from 'types/Member';

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;

  transition: box-shadow 0.4s;

  ${props => props.onClick && css`
    cursor: pointer;
    :hover {
      box-shadow: 0 0 4px ${COLORS.GRAY[6]};
    }
    :active {
      background-color: ${COLORS.GRAY[3]};
    }
  `}
`;

const Text = styled.div`
  font-size: 1rem;
`;

interface Props {
  member: Member;
  onClick?: (event: React.MouseEvent) => void;
};

const MemberItem: React.FC<Props> = ({ member, onClick, ...rest }) => {
  return (
    <MemberWrapper onClick={onClick} {...rest}>
      <Icon src={member.image} />
      <Gap top="0.5rem" />
      <Text>{member.name}</Text>
    </MemberWrapper>
  );
};

export default MemberItem;
