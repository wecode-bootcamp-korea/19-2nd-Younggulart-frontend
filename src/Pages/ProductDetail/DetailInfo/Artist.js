import React from 'react';
import styled from 'styled-components';

const Artist = ({ artist }) => {
  const { name, introduction, description, profile_image_url } = artist;
  return (
    <ArtistAll>
      <ArtistOne>
        <ArtistIntroduce>
          <i className="xi-focus-frame" />
          <h1>{name}</h1>
        </ArtistIntroduce>
        <h2>{introduction}</h2>
        <ArtistBox>
          <h3>하이라이트</h3>
          <p>{description}</p>
        </ArtistBox>
      </ArtistOne>

      <ArtistTwo>
        <img src={profile_image_url} alt="" />
      </ArtistTwo>
    </ArtistAll>
  );
};

const ArtistAll = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'stretch')}
`;

const ArtistOne = styled.div`
  width: 50%;
`;

const ArtistIntroduce = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  h1 {
    font-size: 30px;
  }

  .xi-focus-frame {
    margin-right: 10px;
    font-size: 50px;
    color: ${props => props.theme.primaryColor};
  }
`;

const ArtistBox = styled.div`
  margin-top: 25px;
  padding: 30px;
  background: #eee;

  h3 {
    margin-bottom: 15px;
    color: ${props => props.theme.primaryColor};
  }
`;

const ArtistTwo = styled.div`
  img {
    width: 310px;
  }
`;

export default Artist;
