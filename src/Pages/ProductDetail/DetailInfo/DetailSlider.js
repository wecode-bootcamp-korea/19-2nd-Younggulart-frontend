import React, { useState, useRef, useEffect } from 'react';

import DetailArtSlider from './DetailArtSlider';
import styled from 'styled-components';

const DetailSlider = ({ art }) => {
  const { images } = art;

  const [clickData, setClickData] = useState(0);

  const onClickData = index => {
    console.log(index);
    setClickData(index);
  };

  return (
    <Slider>
      <SlideRef>
        <MainImg>
          <img alt="mainImg" className="mainImg" src={art.images[clickData]} />
        </MainImg>
        <DetailArtSlider image={images} clickData={onClickData} />
      </SlideRef>
      <hr />
    </Slider>
  );
};

const Slider = styled.div`
  position: relative;
  margin: 0 auto;

  hr {
    margin: 40px 0 20px;
    border: 1px solid #eee;
  }
`;

const SlideRef = styled.div`
  margin: 0 auto;
`;

const MainImg = styled.div`
  ${({ theme }) => theme.flexSet('center', 'stretch')}

  .mainImg {
    ${({ theme }) => theme.flexSet('center', 'stretch')}
    margin-bottom:20px;
    width: auto;
    height: 500px;
  }
`;

export default DetailSlider;
