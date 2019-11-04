import React, { useEffect, useRef, Children, useMemo } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import styled from 'styled-components';

import FullShadow from 'components/atoms/FullShadow';
import Maybe from 'types/Maybe';
import COLORS, { changeToRGBA } from 'assets/colors';

const modalRoot: Maybe<HTMLElement> = document.getElementById('modal-root');

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${COLORS.WHITE};
  padding: 2rem;
  color: ${COLORS.BLACK};
`;

const element = document.createElement('div');

interface Props {
  onShadowClick?: () => {},
};

const Modal: React.FC<Props> = ({ children, onShadowClick }) => {
  useEffect(() => {
    modalRoot && modalRoot.appendChild(element); 
    return () => {
      modalRoot && modalRoot.removeChild(element);
    };
  }, []);

  const ModalComponent = (
    <FullShadow onClick={onShadowClick}>
      <Wrapper>
        <div>
          {children}
        </div>
      </Wrapper>
    </FullShadow>
  );

  return createPortal(ModalComponent, element);
};

export default Modal;
