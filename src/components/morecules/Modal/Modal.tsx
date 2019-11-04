import React, { useEffect, useRef, Children, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styled, { css, keyframes } from 'styled-components';

import FullShadow from 'components/atoms/FullShadow';
import Maybe from 'types/Maybe';
import COLORS, { changeToRGBA } from 'assets/colors';
import { useModalDispatch, useModalState } from 'contexts/ModalContext';

import './Modal.css';
import useDelay from 'hooks/useDelay';

const modalRoot: Maybe<HTMLElement> = document.getElementById('modal-root');

interface WrapperProps {
  isOpen: boolean;
}

const WrapperIn = keyframes`
  from {
    transform: translateY(-0.75rem);
    opacity: 0.01;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const WrapperOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-0.75rem);
    opacity: 0.01;
  }
`;

const Wrapper = styled.div`
  align-self: center;
  margin: 0 auto;
  background-color: ${COLORS.WHITE};
  padding: 2rem;
  color: ${COLORS.BLACK};
  transform: translateY(-0.75rem);
  ${(props: WrapperProps) =>
    props.isOpen ? css`
      animation: ${WrapperIn} 0.6s linear 0s 1 forwards;
    ` : css`
      animation: ${WrapperOut} 0.6s linear 0s 1 forwards;
    `
  }
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

  const dispatch = useModalDispatch();
  
  const isOpen = useModalState(state => state.isOpen);
  const isOpenOverride = useDelay(isOpen, 600);

  const handleClick = () => {
    onShadowClick && onShadowClick();
    dispatch({ type: "SET_MODAL_STATE", isOpen: false });
  };

  const ModalComponent = (
    <FullShadow onClick={handleClick} style={{ display: isOpenOverride ? 'flex' : 'none' }}>
      <Wrapper isOpen={isOpen}>
        <div>
          {children}
        </div>
      </Wrapper>
    </FullShadow>
  );

  return createPortal(ModalComponent, element);
};

export default Modal;
