import React, { useState } from 'react';
import BidsOffer from './BidsOffer';
import styled from 'styled-components';

const Purchase = ({ bidding }) => {
  const { price, status } = bidding;

  const [showBidsBox, setShowBidsBox] = useState(false);

  const handleCloseModal = () => {
    setShowBidsBox(false);
  };

  const handleShowModal = () => {
    setShowBidsBox(true);
  };

  return (
    <Bidding>
      <Price>
        ₩ <h1>{Number(price.split('.')[0]).toLocaleString()}</h1>
      </Price>
      <BiddingTxt>{status}</BiddingTxt>
      <BiddingBtn onClick={handleShowModal}>가격협상</BiddingBtn>
      {showBidsBox && <BidsOffer handleCloseModal={handleCloseModal} />}
    </Bidding>
  );
};

const Bidding = styled.div`
  line-height: 70px;
`;
const Price = styled.div`
  display: flex;
  color: ${props => props.theme.primaryColor};
  font-size: 50px;
  font-weight: ${props => props.theme.fontWeightMedium};

  h1 {
    margin-left: 5px;
    font-weight: ${props => props.theme.fontWeightBold};
  }
`;
const BiddingTxt = styled.div`
  font-size: 30px;
  font-weight: lighter;
`;

const BiddingBtn = styled.div`
  margin-bottom: 40px;
  padding: 4px 0;
  width: 450px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  background: ${props => props.theme.black};

  &:hover {
    transition: 0.5s;
    background: #000;
  }
`;

export default Purchase;
