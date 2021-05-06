import React from 'react';
import styled from 'styled-components';

const Artwork = ({ work }) => {
  const {
    images,
    name,
    released_year,
    author,
    material,
    paper,
    width_cm,
    height_cm,
    description,
  } = work;

  return (
    <ArtworkAll>
      <img src={images[0]} alt="메인슬라이드이미지" />
      <ArtworkDetail>
        <ArtworkTxt>
          <h1>{name}</h1>
          <p>{released_year}</p>
        </ArtworkTxt>
        <ArtistName>
          <p>{author}</p>
        </ArtistName>
        <div>
          <ListTop>
            <Technic>
              <h2>기법</h2>
              <p>{material}</p>
              <p>{paper}</p>
            </Technic>
            <Size>
              <h2>작품사이즈</h2>
              <Sizzle>
                <p>{width_cm}</p>X<p>{height_cm}</p>
              </Sizzle>
            </Size>
          </ListTop>
          <ArtBord>
            <h2>마감</h2>
            <p>{description}</p>
          </ArtBord>
        </div>
      </ArtworkDetail>
    </ArtworkAll>
  );
};

const ArtworkAll = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'stretch')}
  padding-top: 20px;

  img {
    width: 50%;
    height: 350px;
    object-fit: cover;
  }
`;

const ArtworkDetail = styled.div`
  width: 45%;
`;

const ArtworkTxt = styled.div`
  display: flex;
  align-items: flex-end;

  h1 {
    font-size: 35px;
    font-weight: bold;
    font-style: italic;
  }

  p {
    font-size: 30px;
  }
`;

const ArtistName = styled.div`
  margin: 20px 0 35px 0;
  color: ${props => props.theme.primaryColor};
  font-size: 26px;
`;

const ListTop = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'stretch')}
  margin: 25px 0;
`;

const DetailTxt = styled.div`
  padding: 0 20px;
  border-left: 3px solid #000;
  font-size: ${props => props.theme.fontSizeMedium};
  line-height: 35px;

  h2 {
    font-weight: bold;
  }
`;

const Technic = styled(DetailTxt)``;
const Size = styled(DetailTxt)``;
const ArtBord = styled(DetailTxt)``;

const Sizzle = styled.div`
  display: flex;
`;

export default Artwork;
