import React, { useState, useEffect } from 'react';
import { API } from '../../../config';
import { useHistory } from 'react-router';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainSlider = () => {
  const [slideData, setSlideData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // fetch('/data/mainSliderData.json')
    fetch(`${API}/banners`)
      .then(res => res.json())
      .then(data => {
        setSlideData(data.banners);
      });
  }, []);

  return (
    <MainSlideBanner>
      <Slider {...Settings}>
        {slideData.map(banner => {
          return (
            <React.Fragment key={banner.link_url}>
              <SlideWrapper
                style={{ backgroundImage: `url(${banner.image_url})` }}
              >
                <TxtBox>{banner.text}</TxtBox>
                <Button onClick={() => history.push(banner.link_url)}>
                  더보기
                  <i className="xi-long-arrow-right" />
                </Button>
              </SlideWrapper>
            </React.Fragment>
          );
        })}
      </Slider>
    </MainSlideBanner>
  );
};

const MainSlideBanner = styled.div`
  margin: 40px auto 0;
  height: 800px;

  .slick-prev {
    position: absolute;
    top: 350px;
    left: 100px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    content: '/f061';
    z-index: 10;

    :before {
      top: 0;
      left: 0;
      opacity: 1;
      color: #000;
      font-size: 50px;
      font-family: 'Font Awesome 5 Free';
    }

    :hover:before {
      color: #fff;
    }

    :hover {
      background-color: ${props => props.theme.primaryColor};
    }
  }

  .slick-next {
    position: absolute;
    top: 350px;
    right: 100px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    content: '/f060';
    z-index: 11;

    :before {
      top: 0;
      right: 0;
      width: 50px;
      height: 50px;
      opacity: 1;
      color: #000;
      font-size: 50px;
      font-family: 'Font Awesome 5 Free';
    }

    :hover:before {
      color: #fff;
    }

    :hover {
      background-color: ${props => props.theme.primaryColor};
    }
  }
`;

const SlideWrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center')}
  flex-direction: column;
  height: 800px;
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
`;

const TxtBox = styled.div`
  padding: 50px;
  width: 800px;
  background: rgba(0, 0, 0, 0.8);
  font-size: 40px;
  font-weight: lighter;
`;

const Button = styled.div`
  position: absolute;
  bottom: 280px;
  padding: 20px 100px;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryColor};
  font-size: 20px;

  .xi-long-arrow-right {
    width: 80px;
    font-size: 20px;
    z-index: 100;
  }
`;

export default MainSlider;

const Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2750,
};
