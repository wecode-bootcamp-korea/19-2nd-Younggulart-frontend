import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const Cards = props => {
  // const { profile_image_url, name, art } = props.artistData[0];
  const [moreData, setMoreData] = useState(false);

  const history = useHistory();

  const moreBtn = index => {
    setMoreData(!moreData);
  };

  const goToProductDetail = id => {
    history.push(`/productList/${id}`);
  };

  return (
    Boolean(props.artistData.profile_image_url) && (
      <Layer
        backColor={props.backColor}
        style={{ height: moreData ? 'auto' : '300px' }}
      >
        <ArtWork>
          <Artist>
            <ArtistImg src={props.artistData.profile_image_url}></ArtistImg>
            <ArtiseName>{props.artistData.name}</ArtiseName>
          </Artist>
          {props.artistData['arts'].map((elm, id) => {
            return (
              <WorkList key={id}>
                <WorkImg
                  src={elm.thumbnail_url}
                  onClick={() => goToProductDetail(elm.id)}
                ></WorkImg>
                <WorkContents>
                  {elm.width_cm}x{elm.height_cm}cm,
                  {parseInt(elm.price).toLocaleString('ko-KR')}원,
                  <WorkSorce>
                    {elm.material__name} 에 {elm.paper__name}
                  </WorkSorce>
                </WorkContents>
              </WorkList>
            );
          })}
          <MoreBtn
            onClick={() => {
              return moreBtn(props.elmIdx);
            }}
          >
            더보기
          </MoreBtn>
        </ArtWork>
      </Layer>
    )
  );
};

const Layer = styled.div`
  display: flex;
  background-color: ${props => props.backColor};
  margin-top: 10px;
`;

const Artist = styled.span`
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  text-align: center;
  height: 100%;
  width: 300px;
`;

const ArtistImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 120px;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  padding-bottom: 10px;
`;

const ArtiseName = styled.h1``;

const ArtWork = styled.section`
  display: flex;
  margin-left: 350px;
  margin-top: 17px;
  width: 1400px;
  overflow: hidden;
  flex-wrap: wrap;
`;

const WorkList = styled.li`
  flex-direction: row;
  flex-wrap: wrap;
  width: 200px;
  text-align: center;
  position: relative;
  margin-right: 20px;
  max-width: 100%;
  float: none;
  display: inline-block;
  vertical-align: top;
  height: 310px;
  cursor: pointer;
`;

const WorkImg = styled.img`
  background: #f3f3f3;
  margin: 0 auto;
  padding: 4px;
  z-index: 2;
  position: relative;
  border: 4px solid #161616;
  box-sizing: border-box;
  height: 226px;
  width: 200px;
`;

const WorkContents = styled.h1`
  display: block;
  font-size: 12px;
  line-height: 18px;
  color: #555;
  text-align: right;
  font-weight: 300;
  margin-top: 10px;
`;

const WorkSorce = styled.h2`
  color: #000;
  font-weight: 500;
  font-size: 12px;
`;

const MoreBtn = styled.button`
  position: absolute;
  width: 120px;
  height: 60px;
  border-radius: 50px;
  font-size: 17px;
  bottom: 150px;
  text-transform: uppercase;
  right: 10px;
  z-index: 100;
  font-weight: 500;
  background-color: #aaa;
  color: white;

  &:hover {
    background-color: ${props => props.theme.black};
  }
`;

export default Cards;
