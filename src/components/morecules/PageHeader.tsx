import React, { useCallback } from 'react';
import styled from 'styled-components';

import { useModalDispatch, useModalState } from 'contexts/ModalContext';

import Icon from 'components/atoms/Icon';
import Container from 'components/atoms/Container';
import Gap from 'components/atoms/Gap';
import Button from 'components/atoms/Button';

import COLORS from 'assets/colors';
import hum from 'assets/img/hum.png';

const PageHeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  border-bottom: 1px solid ${COLORS.GRAY[3]};
  box-shadow: 0 3px 10px ${COLORS.GRAY[3]};
`;

const Flex = styled.div`
  display: flex;
  vertical-align: middle;
  align-items: center;
`;

const Text = styled.div`
  flex: 1;
  font-size: 1.5rem;
  margin-left: 1rem;
  font-weight: bold;
`;

const PageHeader: React.FC = () => {
  const dispatch = useModalDispatch();

  const isOpen = useModalState(state => state.isOpen);

  const handleClick = () => {
    dispatch({ type: "SET_MODAL_STATE", isOpen: !isOpen });
  };

  return (
    <PageHeaderWrapper>
      <Gap top="0.6rem" />
      <Container>
        <Flex>
          <Icon width="58px" height="64px" src={hum} />
          <Text>휴먼톡톡</Text>
          {/* <Button color={COLORS.BLUE[6]} onClick={handleClick}>돌리기</Button> */}
        </Flex>
      </Container>
      <Gap bottom="0.6rem" />
    </PageHeaderWrapper>
  );
};

export default PageHeader;
