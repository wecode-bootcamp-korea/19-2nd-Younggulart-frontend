import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <LoadingWrap>
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
  ${({ theme }) => theme.flexCenter};
  min-height: 100vh;
`;

const LoadingBar = styled.div`
  width: 3rem;
  height: 3rem;
  pointer-events: none;
  border: 0.3rem solid transparent;
  border-color: ${({ theme }) => theme.bgColor};
  border-top-color: ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  animation: ${loadingSpin} 1s linear infinite;
`;
