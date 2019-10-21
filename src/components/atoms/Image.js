import styled from 'styled-components';

const Image = styled.img`
  width: ${props => props.width || "64px"};
  height: ${props => props.height || "64px"};
`;

export default Image;
