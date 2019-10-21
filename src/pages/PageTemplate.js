import React from 'react';
import styled from 'styled-components';

import Container from 'components/atoms/Container';

const ContentWrapper = styled.div`
  margin-top: 7rem;
  margin-bottom: 4rem;
`;

const PageTemplate = ({ children }) => {
  return (
    <Container>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Container>
  );
};

export default PageTemplate;
