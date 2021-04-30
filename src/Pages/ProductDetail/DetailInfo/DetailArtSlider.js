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
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 40%;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

export default DetailArtSlider;
