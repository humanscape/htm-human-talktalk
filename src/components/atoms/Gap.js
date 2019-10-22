import styled from 'styled-components';

const Gap = styled.div`
  ${props => props.top && `margin-top: ${props.top};`}
  ${props => props.left && `margin-left: ${props.left};`}
  ${props => props.right && `margin-right: ${props.right};`}
  ${props => props.bottom && `margin-bottom: ${props.bottom};`}
`;

export default Gap;
