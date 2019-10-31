import styled, { css } from 'styled-components';
import { Color } from 'csstype';
import COLORS from 'assets/colors';

interface Props {
  inverted?: boolean;
  color?: Color;
};

const Button = styled.button`
  font-size: 1.25rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s;
  ${(props: Props) => props.inverted && props.inverted === true
    ? css`
      color: ${COLORS.WHITE};
      background-color: ${props.color ? props.color : COLORS.GRAY[6]};
      :hover {
        background-color: ${COLORS.WHITE};
        border: 1px solid ${props.color ? props.color : COLORS.GRAY[6]};
        color: ${props.color ? props.color : COLORS.GRAY[6]};
      }
    ` : css`
      border: 1px solid ${props.color ? props.color : COLORS.GRAY[6]};
      color: ${props.color ? props.color : COLORS.GRAY[6]};
      :hover {
        background-color: ${props.color ? props.color : COLORS.GRAY[6]};
        color: ${COLORS.WHITE};
      }
    `
  }
`;

export default Button;
