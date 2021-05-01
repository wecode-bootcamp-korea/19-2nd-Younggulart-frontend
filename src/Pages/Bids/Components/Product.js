import React from 'react';
import styled, { css } from 'styled-components';

const Product = ({ art }) => {
  const {
    artist,
    artist_image_url,
    name,
    price,
    thumbnail_url,
    released_year,
  } = art;

  const textLengthOverCut = text => {
    return text.length > 40 ? `${text.substr(0, 40)}...` : text;
  };

  return (
    <Wrapper>
      <Artist>
        <Profile alt="artistProfile" src={artist_image_url} />
        <Name>{artist}</Name>
      </Artist>
      <Art alt="artImage" src={thumbnail_url} />
      <Title>
        <Span type="title">{textLengthOverCut(name)}</Span>
        <Span type="year"> {released_year}</Span>
      </Title>
      <Price>
        <Span type="price">경매 시작 가격</Span>₩
        {Number(price.split('.')[0]).toLocaleString()}
      </Price>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'stretch')}
  flex-direction: column;
  margin: 1rem 0.7rem;
  padding: 1.5rem 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px -9px #ccc;
`;

const Artist = styled.div`
  display: flex;
  width: 200px;
  margin-bottom: 1rem;
`;

const Profile = styled.img`
  width: 30%;
  height: 60px;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
`;

const Name = styled.span`
  ${({ theme }) => theme.flexSet('flex-start', 'center')}
  padding-left: 0.5rem;
  font-weight: 800;
`;

const Title = styled.div`
  padding-top: 1rem;
`;

const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizeSmall};
  letter-spacing: 1px;

  ${({ type }) => {
    if (type === 'title') {
      return css`
        font-style: oblique;
        font-weight: 800;
      `;
    }
    if (type === 'price') {
      return css`
        color: black;
        letter-spacing: 0px;
      `;
    }
  }}
`;

const Price = styled.span`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.primaryColor};
  font-size: 2rem;
  letter-spacing: 1px;
`;

const Art = styled.img`
  width: 80%;
  height: 160px;
  display: block;
  margin: 0 auto;
  box-shadow: white 0px 0px 0px 3px, black 0px 0px 0px 6px;
`;
