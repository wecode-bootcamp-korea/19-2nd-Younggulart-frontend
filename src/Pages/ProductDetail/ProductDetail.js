import React, { useState, useEffect } from 'react';
import { API } from '../../config';
import styled from 'styled-components';
import DetailInfo from './DetailInfo/DetailInfo';
import Purchase from './Purchase/Purchase';
import { useHistory } from 'react-router-dom';

const ProductDetail = () => {
  const [detailData, setDetailData] = useState({});
  const history = useHistory();

  const productId = history.location.pathname.split('/')[2];

  useEffect(() => {
    // fetch('/data/ProductDetail.json')
    fetch(`${API}/arts/${productId}`)
      .then(res => res.json())
      .then(data => {
        setDetailData(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  padding-top: 60px;
`;
export default ProductDetail;
