import React, { useState } from 'react';
import styled from 'styled-components';

const BidsOffer = ({ handleCloseModal }) => {
  const [showMessageBox, setShowMessageBox] = useState(false);

  const showModal = () => {
    setShowMessageBox(!showMessageBox);
  };

  return (
    <Offer>
      <i onClick={handleCloseModal} className="xi-close" />
      <h2>Make an offer on this artwork</h2>
      <PriceField>
        ₩
        <input type="number" min="1000000" step="1" />
      </PriceField>
      <input type="text" placeholder="이메일 주소" />
      <Add onClick={showModal}>ADD A MESSAGE</Add>

      {showMessageBox && (
        <Message
          cols="30"
          rows="10"
          placeholder="여기에 메세지를 남겨주시면 24시간내로 답장 드립니다!"
        />
      )}

      <AddBtn>문의사항 보내기</AddBtn>
    </Offer>
  );
};

const Offer = styled.div`
  position: relative;
  padding: 25px;
  top: -121px;
  width: 450px;
  background: #e8e8e8;

  h2 {
    text-align: center;
    font-size: ${props => props.theme.fontSizeMedium};
    font-weight: bolder;
  }

  input {
    width: 390px;
    margin-top: 20px;
    padding: 20px 30px;
    font-size: 18px;

    :focus {
      transition: 0.5s;
      outline: 3px solid #777;
    }
  }

  .xi-close {
    width: 390px;
    text-align: center;
    font-size: 25px;
    margin: 0 auto;
  }
`;

const PriceField = styled.div`
  ${({ theme }) => theme.flexAlignCenter}
  justify-content: space-between;
  padding: 0 30px;
  width: 390px;
  border-radius: 5px;
  background: #fff;
  font-size: 18px;

  input {
    width: 300px;
    margin-top: 0;
    border: none;
    font-size: 18px;

    :focus {
      outline: none;
    }
  }
`;

const Add = styled.a`
  margin: 0 140px;
  color: #000;
  cursor: pointer;
  text-decoration: underline;
  font-size: 15px;
  font-weight: bold;

  :link {
    text-decoration: none;
    border: rgba(0, 0, 0) solid;
    border-width: 0 0 4px 0;
  }
`;

const Message = styled.textarea`
  /* display: ${props => (props.showMessageBox ? 'block' : 'none')}; */
  display: block;
  padding: 20px;
  width: 390px;
  color: #999;
  background: #fff;
  font-size: 15px;
  font-weight: lighter;
  border: none;

  :focus {
    transition: 0.5s;
    outline: 3px solid #777;
  }
`;

const AddBtn = styled.div`
  margin-top: 15px;
  padding: 4px 0;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  font-size: 13px;
  background: ${props => props.theme.black};

  &:hover {
    transition: 0.5s;
    background: #000;
  }
`;
export default BidsOffer;
