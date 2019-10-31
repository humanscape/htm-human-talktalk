import React from 'react';
import styled from 'styled-components';

import Icon from 'components/atoms/Icon';

import COLORS from 'assets/colors';
import hum from 'assets/img/hum.png'
import Container from 'components/atoms/Container';
import Gap from 'components/atoms/Gap';

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
  font-size: 1.5rem;
  margin-left: 1rem;
  font-weight: bold;
`;

const PageHeader: React.FC = () => {
  return (
    <PageHeaderWrapper>
      <Gap top="0.6rem" />
      <Container>
        <Flex>
          <Icon width="58px" height="64px" src={hum} />
          <Text>휴먼톡톡</Text>
        </Flex>
      </Container>
      <Gap bottom="0.6rem" />
    </PageHeaderWrapper>
  );
};

export default PageHeader;
