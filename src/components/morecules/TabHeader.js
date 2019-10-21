import React from 'react';
import styled from 'styled-components';

import COLORS from 'assets/colors';

const TabHeaderWrapper = styled.div`
  margin-top: 2rem;
  margin-left: 1rem;
  padding-left: 0.1rem;
  padding-right: 3rem;
  padding-bottom: 0.5rem;
  display: inline-block;
  border-bottom: 1px solid ${COLORS.GRAY[5]};
  font-size: 1.5rem;
  font-weight: bold;
`;

const TabHeader = ({
  title = "제목을 입력해주세요."
}) => {
  return (
    <TabHeaderWrapper>
      {title}
    </TabHeaderWrapper>
  );
};

export default TabHeader;
