import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cards from './Cards/Cards';
import SlideFliter from './SlideFliter/SlideFliter';
import ButtonList from './ButtonList/ButtonList';
import FilterIcon from './FilterIcon/FilterIcon';
import { API } from '../../../src/config';

const ProductList = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const [artistData, setArtistData] = useState([]);
  const [buttonActive2, setButtonActive2] = useState(false);

  const [filterChoice, setFilterChoice] = useState(CATEGORY[0].name);
  const [filterChoice2, setFilterChoice2] = useState(
    THEMEFILTERCATEGORY[0].name
  );
  const [buttonExpand, setButtonExpand] = useState(false);
  const [buttonExpand2, setButtonExpand2] = useState(false);

  //슬라이더
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(999999999);
  const [heightMin, setHeightMin] = useState(0);
  const [heightMax, setHeightMax] = useState(9999);
  const [widthMin, setWidthMin] = useState(0);
  const [widthMax, setWidthMax] = useState(9999);

  const [moreArtist, setMoreArtist] = useState(1);

  const handleMoreArtist = () => {
    setMoreArtist(moreArtist + 1);
  };

  const buttonClicked = ref => {
    if (ref.target.id === '1') {
      setButtonActive(!buttonActive);
      setButtonExpand(!buttonExpand);
    } else if (ref.target.id === '2') {
      setButtonActive2(!buttonActive2);
      setButtonExpand2(!buttonExpand2);
    }
  };

  const filterChoose = index => {
    setFilterChoice(CATEGORY[index].name);
    setButtonExpand(!buttonExpand);
    setButtonActive(false);
  };
  const filterChoose2 = index => {
    setFilterChoice2(THEMEFILTERCATEGORY[index].name);
    setButtonExpand2(!buttonExpand2);
    setButtonActive2(false);
  };

  useEffect(() => {
    fetch(
      `${API}/artlist/1?min_price=${priceMin}&max_price=${priceMax}&min_height=${heightMin}&max_height=${heightMax}&min_width=${widthMin}&max_width=${widthMax}&page=${moreArtist}`
    )
      .then(res => res.json())
      .then(data => setArtistData(data));
  }, [
    priceMin,
    priceMax,
    heightMin,
    heightMax,
    widthMin,
    widthMax,
    moreArtist,
  ]);

  // console.log(Boolean(artistData.RESULT.length));

  return (
    <>
      <Cover>
        <CoverName>작품 판매</CoverName>
        <Header>내 검색</Header>
      </Cover>
      <FilterPrimary>
        <MediaFilterActive
          id="1"
          onClick={id => {
            buttonClicked(id);
          }}
          buttonActive={buttonActive}
        >
          <ButtonName>{filterChoice}</ButtonName>
          {buttonExpand && (
            <ButtonList
              category={CATEGORY}
              left="0px"
              top="50px"
              filterChoose={filterChoose}
            />
          )}
        </MediaFilterActive>

        <ThemeFilterActive
          id="2"
          onClick={id => {
            buttonClicked(id);
          }}
          buttonActive2={buttonActive2}
        >
          <ButtonName>{filterChoice2}</ButtonName>
          {buttonExpand2 && (
            <ButtonList
              Category={THEMEFILTERCATEGORY}
              left="481px"
              filterChoose={filterChoose2}
            />
          )}
        </ThemeFilterActive>

        <StyleFilter>
          <ButtonName>스타일</ButtonName>
        </StyleFilter>
        <MaterialFilter>
          <ButtonName>기법</ButtonName>
        </MaterialFilter>
      </FilterPrimary>
      <FiltersSecondary>
        <PriceSlider>
          <SlideFliter
            name={'가격'}
            setMin={setPriceMin}
            setMax={setPriceMax}
            max="10000000"
          ></SlideFliter>
        </PriceSlider>
        <FilterIcon IconTitles="방향" Icons={<span></span>} left="500px" />
        <FilterIcon
          IconTitles="크기"
          Icons={<i className="xi-image-o"></i>}
          left="650px"
        />
        <HeightSlider>
          <SlideFliter
            name={'높이'}
            setMin={setHeightMin}
            setMax={setHeightMax}
            max="500"
          ></SlideFliter>
        </HeightSlider>
        <WidthSlider>
          <SlideFliter
            name={'넓이'}
            setMin={setWidthMin}
            setMax={setWidthMax}
            max="500"
          ></SlideFliter>
        </WidthSlider>
        <ColorSort>
          <ColorIcon src="https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/glyphs/ico_filter_colors.1316fa2e.png" />
          <Caret>
            <i className="xi-caret-down-min"></i>
          </Caret>
        </ColorSort>
      </FiltersSecondary>
      <FiltersSorting>
        <Container>
          <FilterLeft>
            <SubscribeBox>Subscribe to this search</SubscribeBox>
          </FilterLeft>
          <FilterRight>
            <Sort>정렬 ▾</Sort>
            <DropDown>15개씩 보기 ▾</DropDown>
          </FilterRight>
        </Container>
      </FiltersSorting>
      {Boolean(artistData.RESULT) &&
        artistData.RESULT.map((elm, index) => {
          return (
            <ArtList>
              <Cards
                artistData={elm}
                backColor="#efefef"
                elmIdx={index}
              ></Cards>
            </ArtList>
          );
        })}
      <PageBtnSection>
        <MoreBtn onClick={handleMoreArtist}>Next 5 Artist.</MoreBtn>
      </PageBtnSection>
    </>
  );
};
const CATEGORY = [
  { name: '회화' },
  { name: '조각' },
  { name: '사진' },
  { name: '소묘' },
  { name: '인쇄' },
];

const THEMEFILTERCATEGORY = [
  { name: '개념미술' },
  { name: '거리미술' },
  { name: '누드' },
  { name: '대중문화' },
  { name: '도시' },
];

const ArtList = styled.div`
  position: relative;
  margin-bottom: 15px;
  overflow: hidden;
`;

const Cover = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 230px;
  background-image: url('https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banner_desk_search.519633a3.jpg');
`;

const CoverName = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 42px;
  font-weight: 500;
  line-height: 40px;
`;

const Header = styled.span`
  position: absolute;
  margin: 0 auto;
  bottom: 0;
  width: 230px;
  height: 30px;
  padding-top: 12px;
  font-weight: 500;
  background-color: #fff;
  text-align: center;
`;

const FilterPrimary = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  position: relative;
  width: 100%;
  height: 110px;
  background-color: #fff;
  padding: 25px 100px;
`;

const MediaFilterActive = styled.button`
  position: relative;
  background-color: ${props => {
    return props.buttonActive ? 'black' : 'white';
  }};
  color: ${props => {
    return props.buttonActive ? 'white' : 'black';
  }};
  border: 0.2px solid #ccc;
  border-radius: 10px;
  z-index: 99;
  width: 300px;
  height: 80px;
`;

const ThemeFilterActive = styled.button`
  background-color: ${props => {
    return props.buttonActive2 ? 'black' : 'white';
  }};
  color: ${props => {
    return props.buttonActive2 ? 'white' : 'black';
  }};
  border: 0.2px solid #ccc;
  border-radius: 10px;
  width: 300px;
  height: 80px;
`;

const StyleFilter = styled.button`
  background-color: white;
  border: 0.2px solid #ccc;
  border-radius: 10px;
  width: 300px;
  height: 80px;
  &:hover {
    background-color: ${props => props.theme.bgColor};
  }
`;

const ButtonName = styled.h1`
  font-size: 20px;
  width: auto;
  display: inline;
  position: relative;
`;

const MaterialFilter = styled.button`
  background-color: white;
  border: 0.2px solid #ccc;
  border-radius: 10px;
  width: 300px;
  height: 80px;
  &:hover {
    background-color: ${props => props.theme.bgColor};
  }
  &:active {
  }
`;

const FiltersSecondary = styled.div`
  position: relative;
  width: 100%;
  height: 110px;
  background-color: #ddd;
  padding: 50px 0 0;
`;
const PriceSlider = styled.span`
  top: 14px;
  position: absolute;
  left: 250px;
`;

const HeightSlider = styled.span`
  position: absolute;
  top: 14px;
  left: 850px;
`;
const WidthSlider = styled.span`
  position: absolute;
  top: 14px;
  left: 1100px;
`;
const ColorSort = styled.span`
  position: absolute;
  display: flex;
  top: 50px;
  left: 1350px;
`;
const ColorIcon = styled.img`
  width: 33px;
  &:hover {
    transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    cursor: pointer;
  }
`;
const Caret = styled.div`
  margin-top: 12px;
`;
const FiltersSorting = styled.div`
  display: flex;
  background-color: #efefef;
  padding-top: 25px;
  padding-bottom: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

const FilterLeft = styled.span`
  display: flex;
  justify-content: left;
  align-self: center;
  width: 40%;
`;

const FilterRight = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-right: 0 10% 10% 0;
  width: 40%;
`;

const SubscribeBox = styled.button`
  background-color: ${props => props.theme.black};
  color: white;
  border-radius: 50px;
  font-size: 17px;
  display: inline-block;
  height: 50px;
  line-height: 45px;
  padding: 4px 30px 10px;
  margin-bottom: 20px;
`;

const Sort = styled.button`
  color: #000;
  text-transform: inherit;
  background-color: #fff;
  border-radius: 20px;
  border: 0;
  text-align: left;
  width: auto;
  font-weight: 500;
  font-size: 17px;
  padding: 10px 22px;
  margin: 0px 10px 20px;
`;
const DropDown = styled.button`
  color: #000;
  text-transform: inherit;
  background-color: #fff;
  border-radius: 20px;
  border: 0;
  text-align: left;
  width: auto;
  font-weight: 500;
  font-size: 17px;
  padding: 10px 22px;
  margin: 0px 10px 20px;
`;
const PageBtnSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MoreBtn = styled.button`
  height: 36px;
  background-color: powderblue;
  border: 0.5 solid #dedede;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
`;

export default ProductList;
