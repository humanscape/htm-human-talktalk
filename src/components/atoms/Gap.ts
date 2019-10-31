import styled from 'styled-components';
import { MarginProperty } from 'csstype';

interface Props {
  top?: MarginProperty<string | 0>;
  left?: MarginProperty<string | 0>;
  right?: MarginProperty<string | 0>;
  bottom?: MarginProperty<string | 0>;
};

const Gap = styled.div`
  ${(props: Props) => props.top && `margin-top: ${props.top};`}
  ${(props: Props) => props.left && `margin-left: ${props.left};`}
  ${(props: Props) => props.right && `margin-right: ${props.right};`}
  ${(props: Props) => props.bottom && `margin-bottom: ${props.bottom};`}
`;

export default Gap;
