import styled from 'styled-components';
import COLORS, { changeToRGBA } from 'assets/colors';

const FullShadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${changeToRGBA(COLORS.GRAY[8], ".6")};
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

export default FullShadow;
