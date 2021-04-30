import React, { useState } from 'react';
import Framing from './Framing';
import styled from 'styled-components';

const Frame = () => {
  const [showFrameBox, setShowFrameBox] = useState(false);

  const handleCloseModal = () => {
    setShowFrameBox(false);
  };

  const handleShowModal = () => {
    setShowFrameBox(true);
  };

  return (
    <FrameAll>
      <i className="xi-library-image-o"></i>
      <p>Would you like to add a frame to this artwork?</p>
      <FrameButton onClick={handleShowModal}>CHOOSE A FRAME</FrameButton>
      {showFrameBox && (
        <Framing
          handleCloseModal={handleCloseModal}
          showFrameBox={showFrameBox}
        />
      )}
    </FrameAll>
  );
};

const FrameAll = styled.div`
  padding: 20px 0;
  text-align: center;
  border-top: 2px solid #eee;
  border-bottom: 2px solid #eee;
  font-weight: bold;

  .xi-library-image-o {
    font-size: 120px;
    color: #777;
  }

  p {
    margin: 30px 0;
    line-height: 30px;
    font-size: 23px;
  }
`;

const FrameButton = styled.button`
  padding: 20px;
  border-radius: 50px;
  color: #fff;
  background-color: #aaa;

  &:hover {
    transition: 0.5s;
    background-color: #888;
  }
`;
export default Frame;
