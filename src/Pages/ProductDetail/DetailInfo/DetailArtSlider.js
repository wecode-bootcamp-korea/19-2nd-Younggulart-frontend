import React from 'react';
import styled from 'styled-components';

const DetailArtSlider = ({ image, clickData }) => {
  return (
    <SliderAll>
      {image.map((img, index) => {
        return (
          <img
            key={index}
            alt="subImg"
            src={img}
            onClick={() => clickData(index)}
          />
        );
      })}
    </SliderAll>
  );
};

const SliderAll = styled.div`
  ${({ theme }) => theme.flexSet('space-around', 'stretch')}
  margin: 0 auto;
  width: 40%;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

export default DetailArtSlider;
