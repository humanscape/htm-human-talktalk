import styled from 'styled-components';

const Gap = styled.div`
  ${props => props.top && `margin-top: ${props.top};`}
  ${props => props.left && `margin-top: ${props.left};`}
  ${props => props.right && `margin-top: ${props.right};`}
  ${props => props.bottom && `margin-top: ${props.bottom};`}
`;

export default Gap;
