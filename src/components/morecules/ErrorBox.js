import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Image from 'components/atoms/Image';
import Gap from 'components/atoms/Gap';
import Button from 'components/atoms/Button';

import COLORS from 'assets/colors';

const ErrorBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

const Text = styled.div`
  font-size: 1.25rem;
`;

const Title = styled(Text)`
  font-weight: bold;
`;

const ErrorBox = ({ image, title, text, buttonText = "확인" }) => {
  return (
    <ErrorBoxWrapper>
      <Image src={image} width="256px" height="242px" />
      <Gap top="3rem" />
      <Title>{title}</Title>
      <Gap top="2rem" />
      <Text>{text}</Text>
      <Gap top="2rem" />
      <Link to="/">
        <Button color={COLORS.BLUE[6]}>{buttonText}</Button>
      </Link>
    </ErrorBoxWrapper>
  );
};

export default ErrorBox;
