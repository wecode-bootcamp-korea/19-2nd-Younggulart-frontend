import React, { useState, useEffect } from 'react';
import { API } from '../../../config';
import styled, { css } from 'styled-components';

const Framing = ({ handleCloseModal }) => {
  const [materialData, setMaterialData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [sizeData, setSizeData] = useState([]);
  const [elData, setElData] = useState(null);
  const [selectedFrame, setSelectedFrame] = useState(null);

  useEffect(() => {
    fetch('/data/FramData.json')
      // fetch(`${API}/frame/30`)
      .then(res => res.json())
      .then(data => {
        setMaterialData(data.materials);
        setSizeData(data.sizes);
      });

    fetch('/data/ProductDetail.json')
      // fetch(`${API}/arts/200`)
      .then(res => res.json())
      .then(data => {
        setDetailData(data.art);
      });
  }, []);

  const onSelectFrame = idx => {
    if (selectedFrame === idx) {
      setSelectedFrame(null);
    } else {
      setSelectedFrame(idx);
    }
  };

  const handleSize = index => {
    setElData(index);
  };

  return (
    <FramingBack>
      <FramingAll>
        <Choose>
          <h1>Framing</h1>
          <p>Choose your frame</p>

          <Material>
            {materialData.map((frame, index) => (
              <MaterialInfo
                onClick={() => onSelectFrame(index)}
                selectedFrame={selectedFrame}
                index={index}
              >
                <input
                  data-select={frame.material}
                  type="image"
                  src={frame.image_url}
                  alt="이미지"
                  imageUrl={materialData.render_image_url}
                />
                <div>
                  {frame.material} {sizeData.size}
                </div>
              </MaterialInfo>
            ))}
          </Material>

          <Thickness>
            <h2>Choose the thickness of the frame</h2>

            <SliderTrack>
              {sizeData.map((element, index) => (
                <SizeMap id={element.size} elData={elData}>
                  <Track
                    id={index}
                    elData={elData}
                    onClick={() => handleSize(index)}
                  >
                    {element.size}
                  </Track>
                </SizeMap>
              ))}
            </SliderTrack>

            {sizeData.length !== 0 && (
              <SliderSize>
                <Small>{sizeData[0].size}</Small>
                <Middle>{sizeData[1].size}</Middle>
                <Large>{sizeData[2].size}</Large>
              </SliderSize>
            )}
          </Thickness>
        </Choose>
        <Submit>
          <i className="xi-close" onClick={handleCloseModal}></i>
          {detailData.length !== 0 && (
            <Art>
              {selectedFrame !== null ? (
                <ArtFrame
                  style={{
                    background: `url(
                      ${materialData[selectedFrame].render_image_url}
                    )`,
                  }}
                >
                  <img src={detailData.images[0]} alt="" />
                </ArtFrame>
              ) : (
                <img src={detailData.images[0]} alt="" />
              )}
            </Art>
          )}
          <Footer>
            <Title>ORDER SUMMARY</Title>
            {selectedFrame !== null && elData !== null && (
              <Option>
                <h3>Frame</h3>
                <Name>
                  {materialData[selectedFrame].material}
                  &nbsp;{sizeData[elData].size}
                </Name>

                <Amount>
                  +
                  {sizeData[elData].price !== undefined
                    ? Number(
                        sizeData[elData].price.split('.')[0]
                      ).toLocaleString()
                    : sizeData[elData].price}
                </Amount>
              </Option>
            )}
            <hr />
            <Price>
              <h4>Total price for selected options</h4>
              {sizeData.length !== 0 && elData !== null && (
                <TotalPrice>
                  ₩
                  {sizeData[elData].price !== undefined
                    ? Number(sizeData[elData].price).toLocaleString()
                    : sizeData[elData].price}
                </TotalPrice>
              )}
            </Price>
          </Footer>
        </Submit>
      </FramingAll>
    </FramingBack>
  );
};

const FramingBack = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center')}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 2rem;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.5);
`;
const FramingAll = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  background: #fff;
`;

const Choose = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 100px 50px 0;
  background: #ececec;

  h1 {
    font-size: 45px;
  }

  h5 {
    margin-top: 10px;
    font-size: 13px;
  }
`;

const Material = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 40px 0;
`;

const MaterialInfo = styled.div`
  width: 100px;
  height: 100px;

  input {
    width: 85px;
    height: 85px;
    border-radius: 5px;
    border: ${props =>
      props.index === props.selectedFrame
        ? `5px solid ${props.theme.primaryColor}`
        : '1px solid #ccc'};
  }

  div {
    margin: 0 auto;
    font-size: 13px;
  }
`;

const Thickness = styled.div`
  padding-bottom: 50px;
  font-weight: 600;

  h2 {
    margin: 70px 0 40px;
    font-size: 25px;
  }
`;

const SliderTrack = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 280px;
  height: 5px;
  margin: 0 auto;
  background: #fff;
`;

const SizeMap = styled.div`
  color: transparent;
`;

const Track = styled.div`
  position: absolute;
  top: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props =>
    props.id === props.elData ? `${props.theme.primaryColor}` : '#fff'};
`;

const SliderSize = styled.div`
  position: relative;
  top: 25px;
  display: flex;
  margin: 0 auto;
  width: 270px;
  font-weight: bold;
`;

const Small = styled.div`
  position: absolute;
  left: 0;
`;

const Middle = styled.div`
  position: absolute;
  left: calc(52% - 1px);
`;

const Large = styled.div`
  position: absolute;
  right: -20px;
`;

const Submit = styled.div`
  position: relative;
  width: 600px;

  .xi-close {
    position: absolute;
    top: 35px;
    right: 40px;
    font-size: 45px;
    color: ${props => props.theme.primaryColor};
  }
`;

const Art = styled.div`
  width: 400px;
  height: 400px;
  margin: 80px auto;

  background-image: ${props => props.imageUrl};

  img {
    width: 380px;
    height: 380px;
    padding: 20px;
    object-fit: cover;
  }
`;

const ArtFrame = styled.div`
  width: 400px;
  height: 400px;
  padding: 10px;
  background: no-repeat center center;
  object-fit: cover;

  img {
    width: 380px;
    height: 380px;

    object-fit: cover;
  }
`;

const Footer = styled.div`
  padding: 30px;
  color: #333;
  background: #f6f6f6;

  hr {
    margin: 20px 0;
    border: 1px solid #eee;
  }
`;

const Title = styled.div`
  margin-bottom: 20px;
  text-align: left;
  font-size: 13px;
  font-weight: bold;
`;

const Option = styled.div`
  padding-left: 15px;
  border-left: 1px solid #000;
  text-align: left;

  h3 {
    font-weight: bold;
  }
`;

const Name = styled.div`
  margin: 10px 0;
  color: #999;
`;

const Amount = styled.div`
  color: #999;
`;

const Price = styled.div`
  text-align: right;
`;

const TotalPrice = styled.div`
  margin-top: 10px;
  color: ${props => props.theme.primaryColor};
  font-weight: 600;
  font-size: 30px;
`;

export default Framing;
