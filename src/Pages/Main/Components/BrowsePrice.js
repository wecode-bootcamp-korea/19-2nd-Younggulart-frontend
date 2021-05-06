import React from 'react';
// import { useHistory } from 'react-router';
// import { API } from '../../../config';

import styled from 'styled-components';

const BrowsePrice = () => {
  return (
    <BrowsePriceCard>
      <Line />
      <CardProducts>
        <Title>
          <i className="xi-tag"></i>
          가격대별 검색
        </Title>
        <Cards>
          <CardOne>
            <CardList>
              {/* onClick={() => history.pushState(`${}`)} */}
              <img
                src="https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80"
                alt=""
              />

              <Price>
                ~ 2 000 000 ₩
                <i className="xi-long-arrow-right" />
              </Price>
            </CardList>
            <CardList>
              {/* onClick={() => history.pushState(`${}`)} */}

              <img
                src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80"
                alt=""
              />

              <Price>
                <p>2 000 000</p> <p>~ 4000 000 ₩</p>
                <i className="xi-long-arrow-right" />
              </Price>
            </CardList>
          </CardOne>
          <CardTwo>
            <CardList>
              {/* onClick={() => history.pushState(`${}`)} */}
              <img
                src="https://images.unsplash.com/photo-1580380853754-9c0c429bfa9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
                alt=""
              />
              <Price>
                <p>4 000 000 </p>
                <p>~ 6000 000 ₩ </p>
                <i className="xi-long-arrow-right" />
              </Price>
            </CardList>
            <CardList>
              {/* onClick={() => history.pushState(`${}`)} */}
              <img
                src="https://images.unsplash.com/photo-1569091791842-7cfb64e04797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <Price>
                6 000 000 ₩ ~
                <i className="xi-long-arrow-right" />
              </Price>
            </CardList>
          </CardTwo>
        </Cards>
      </CardProducts>
    </BrowsePriceCard>
  );
};

const BrowsePriceCard = styled.div`
  position: relative;
  ${({ theme }) => theme.flexSet('flex-start', 'center')}
  flex-direction: column;
  padding: 160px 0;
`;

const Line = styled.div`
  position: absolute;
  top: -40px;
  height: 80px;
  width: 2px;
  background-color: #d5a770;
`;

const CardProducts = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', 'center')}
  justify-content: space-between;
  margin: 0 auto;
  width: 1170px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  font-size: 50px;

  .xi-tag {
    float: left;
    width: 90px;
    margin-bottom: 20px;
    color: ${props => props.theme.primaryColor};
    transform: scaleX(-1);
    font-size: 90px;
  }
`;

const Cards = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'stretch')}
  width: 710px;
`;

const Card = styled.div`
  flex-direction: column;
`;

const CardOne = styled(Card)`
  margin-top: 60px;
`;

const CardList = styled.div`
  position: relative;
  ${({ theme }) => theme.flexSet('center', 'center')}
  width: 335px;
  height: 330px;
  background-image: url('https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/bg_browse.a5603ae6.png');
  background-size: 100% auto;
  background-position: 50%;
  background-repeat: no-repeat;

  &:last-child {
    margin-top: 60px;
  }

  img {
    width: 285px;
    height: 350px;
    object-fit: cover;
    padding: 6px;
    border: 5px solid #161616;
    background: #f3f3f3;
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 35px;
  width: 100%;
  padding-right: 35px;
  color: #fff;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  z-index: 2;

  .xi-long-arrow-right {
    align-items: center;
    margin: 0 auto;
    padding: 7px 0;
    width: 50px;
    height: 50px;
    border: 3px solid #fff;
    border-radius: 50%;
  }

  :hover {
    transition: all ease 1s;
    font-size: 33px;
  }

  :hover .xi-long-arrow-right {
    padding: 5px 0;
    transition: all ease 1s;
    border: 3px solid ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.primaryColor};
    cursor: pointer;
  }
`;

const CardTwo = styled(Card)`
  margin-bottom: 60px;
`;

export default BrowsePrice;
