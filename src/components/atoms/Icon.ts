import styled from 'styled-components';

interface Props {
  width?: string | 0;
  height?: string | 0;
};

const Icon = styled.img`
  width: ${(props: Props) => props.width || "64px"};
  height: ${(props: Props) => props.height || "64px"};
`;

export default Icon;
