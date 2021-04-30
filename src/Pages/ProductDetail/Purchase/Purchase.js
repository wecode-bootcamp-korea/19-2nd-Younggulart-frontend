import React from 'react';
import styled from 'styled-components';
import Bids from './Bids';
import Frame from './Frame';

const Purchase = ({ detailData }) => {
  const { art } = detailData;
  return (
    <PurchaseAll>
      <Bids bidding={art} />
      <Frame />
    </PurchaseAll>
  );
};

const PurchaseAll = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 140px 70px 40px;
  background: ${props => props.theme.bgColor};
`;
export default Purchase;
