import React, { useState, useEffect } from 'react';
import { API } from '../../config';
import styled from 'styled-components';
import DetailInfo from './DetailInfo/DetailInfo';
import Purchase from './Purchase/Purchase';

const ProductDetail = () => {
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    fetch('/data/ProductDetail.json')
      // fetch(`${API}/arts/200`)
      .then(res => res.json())
      .then(data => {
        setDetailData(data);
      });
  }, []);

  return (
    <ProductDetailAll>
      {detailData.art && (
        <>
          <DetailInfo detailData={detailData} />
          <Purchase detailData={detailData} />
        </>
      )}
    </ProductDetailAll>
  );
};

const ProductDetailAll = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 140px;
`;
export default ProductDetail;
