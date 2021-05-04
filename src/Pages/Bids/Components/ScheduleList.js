import React, { useState, useRef, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Slider from '../../../Components/Slider/Slider';
import Product from '../Components/Product';
import Map from '../Components/Map';

const ScheduleList = ({ bidsList, id }) => {
  const [isShow, setIsShow] = useState(false);
  const mapWrap = useRef();
  const {
    location,
    address,
    phone_number,
    site_url,
    start_at,
    end_at,
    x,
    y,
    arts,
  } = bidsList;

  const showMap = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    if (isShow) {
      window.scrollTo(0, mapWrap.current.scrollHeight * (id * 2));
    }
  }, [isShow]);

  return (
    <>
      <Wrapper>
        <Info>
          <Title>{location}</Title>
          <Address>{address}</Address>
          <InfoBox>
            <InfoText>
              <i className="xi-call" />
              {phone_number}
            </InfoText>
            <InfoText type="address" onClick={showMap}>
              <i className="xi-maker" />
              {address}
            </InfoText>
            <InfoText>
              <i className="xi-clock-o" />
              경매기간 {start_at} ~ {end_at}
            </InfoText>
            <InfoText>
              {site_url === null ? (
                ''
              ) : (
                <>
                  <i className="xi-home-o" />
                  <Homepage href={site_url}>{site_url}</Homepage>
                </>
              )}
            </InfoText>
          </InfoBox>
        </Info>
        <Slider>
          {arts.map((art, index) => {
            return <Product key={index} art={art} />;
          })}
        </Slider>
      </Wrapper>
      {isShow && (
        <Wrapper type="map" ref={mapWrap}>
          <Map x={x} y={y} />
        </Wrapper>
      )}
    </>
  );
};

export default ScheduleList;

const showMap = keyframes`
  from {
      opacity: 0;
      transform: translate3d(0, -2rem, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center')}
  width: 80%;
  margin: ${({ type }) => type !== 'map' && '2rem auto'} 0 auto;
  background-color: ${({ theme }) => theme.bgColor};

  ${({ type }) => {
    if (type === 'map') {
      return css`
        animation: ${showMap} 0.5s;
      `;
    }
  }}
`;

const Info = styled.div`
  align-items: center;
  width: 25%;
  margin: 1rem;
  padding: 1rem;
  text-align: left;
`;

const Title = styled.h1`
  padding: 1rem 0;
  font-style: oblique;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

const Address = styled.span`
  padding-bottom: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryColor};
  border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
`;

const InfoBox = styled.div`
  padding-top: 5rem;
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSizeSmall};

  ${({ type }) => {
    if (type === 'address') {
      return css`
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.primaryColor};
        }
      `;
    }
  }}

  i {
    padding: 0.5rem 0.5rem 0.5rem 0rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const Homepage = styled.a`
  color: ${({ theme }) => theme.primaryColor};
`;
