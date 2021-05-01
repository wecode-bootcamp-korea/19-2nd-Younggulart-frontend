import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Pagenation = props => {
  return (
    <PageBtnSection>
      <MoreBtn>Add 5 Artist.</MoreBtn>
    </PageBtnSection>
  );
};

const PageBtnSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MoreBtn = styled.button`
  width: 76px;
  height: 36px;
  background-color: powderblue;
  border: 0.5 solid #dedede;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
`;

export default Pagenation;
