import React from 'react';
import styled from 'styled-components';
import DetailSlider from './DetailSlider';
import Artwork from './Artwork';
import Introduce from './Introduce';
import Artist from './Artist';

const DetailInfo = ({ detailData }) => {
  const { art, author } = detailData;

  return (
    <DetailInfoAll>
      <DetailSlider art={art} />
      <Artwork work={art} />
      <Introduce intro={author} />
      <Artist artist={author} />
    </DetailInfoAll>
  );
};

const DetailInfoAll = styled.div`
  padding: 70px 130px;
  width: 65%;
`;

export default DetailInfo;
