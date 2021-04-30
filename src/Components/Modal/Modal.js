import React from 'react';
import styled, { keyframes } from 'styled-components';

const Modal = props => {
  const { open, close, header, children } = props;

  return (
    open && (
      <ModalWrap>
        <Overlay onClick={close}> </Overlay>
        <ModalSection>
          <ModalHeader>
            <CloseBtn className="close" onClick={close}>
              <i className="xi-close-thin" />
            </CloseBtn>
            <i className="xi-user-o" />
            <br />
            {header}
          </ModalHeader>
          <ModalMain>{children}</ModalMain>
        </ModalSection>
      </ModalWrap>
    )
  );
};

export default Modal;

const modalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -10rem;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const modalBgShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalWrap = styled.div`
  ${({ theme }) => theme.flexCenter};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${modalBgShow} 0.3s;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -10;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: -5rem;
  font-size: 2.5rem;
  text-align: center;
  color: #999;
  background-color: transparent;
`;

const ModalSection = styled.section`
  width: 40%;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  animation: ${modalShow} 0.3s;
`;

const ModalHeader = styled.header`
  position: relative;
  padding: 3rem;
  background-color: transparent;
  text-align: center;
  font-size: 26px;

  i {
    padding-bottom: 2rem;
    font-size: 4rem;
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const ModalMain = styled.main`
  padding: 1rem;
  text-align: center;
`;
