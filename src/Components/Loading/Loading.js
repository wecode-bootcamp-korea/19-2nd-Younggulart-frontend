import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = ({ forwardRef }) => {
  return (
    <LoadingWrap ref={forwardRef}>
      <LoadingBar />
    </LoadingWrap>
  );
};

export default Loading;

const loadingSpin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingWrap = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center')}
`;

const LoadingBar = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 3rem 0;
  pointer-events: none;
  border: 0.3rem solid transparent;
  border-color: ${({ theme }) => theme.bgColor};
  border-top-color: ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  animation: ${loadingSpin} 1s linear infinite;
`;
