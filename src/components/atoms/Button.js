import styled, { css } from 'styled-components';
import COLORS from 'assets/colors';

const Button = styled.button`
  font-size: 1.25rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s;
  ${props => props.inverted && props.inverted === true
    ? css`
      color: ${COLORS.WHITE};
      background-color: ${props.color};
      :hover {
        background-color: ${COLORS.WHITE};
        border: 1px solid ${props.color};
        color: ${props.color};
      }
    ` : css`
      border: 1px solid ${props.color};
      color: ${props.color};
      :hover {
        background-color: ${props.color};
        color: ${COLORS.WHITE};
      }
    `
  }
`;

export default Button;
