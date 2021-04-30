import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Footer = props => {
  return (
    <Container>
      <FooterManu>
        <LogoImg
          src="https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/logos/logo-colors-square-black-bg.9f4d2cd2.svg"
          alt="로고"
        />
        <Information>
          <InfoTitle>고객센터</InfoTitle>
          <InfoList>
            {INFO.map((data, idx) => {
              return <li key={idx}>{data.name}</li>;
            })}
          </InfoList>
        </Information>
        <Information>
          <InfoTitle>회사소개</InfoTitle>
          <InfoList>
            {CP.map((elm, index) => {
              return <li key={index}>{elm}</li>;
            })}
          </InfoList>
        </Information>
        <Information>
          <InfoTitle>작가신가요?</InfoTitle>
          <InfoList>제휴 작가 등록 신청</InfoList>
          <InfoList>내 계정 (younggleart작가 전용)</InfoList>
        </Information>
      </FooterManu>
      <Baseline>
        <img
          src="https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/logos/a-world-of-creativity.e53ab93c.svg"
          alt=""
        />
      </Baseline>
    </Container>
  );
};

const INFO = [
  { name: '문의하기' },
  { name: '법적공지' },
  { name: '구매일반약관' },
  { name: '고객후기' },
  { name: 'Offrir une carte Cadeau' },
  { name: '무료 예술 자문' },
];

const CP = [
  'younggleart 소개',
  '제휴작가',
  '블로그',
  '조직도',
  '작가 선별기준',
  '자주 묻는 질문',
];

const Container = styled.section`
  width: 100%;
  background-color: #000;
`;
const FooterManu = styled.section`
  margin: 0 auto;
  padding: 40px 0px;
  display: flex;
  justify-content: space-evenly;
  width: 1170px;
`;

const LogoImg = styled.img`
  width: 130px;
  height: 170px;
`;

const Information = styled.ul`
  color: white;
`;

const InfoTitle = styled.li`
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 20px;
  cursor: pointer;
`;

const InfoList = styled.li`
  margin: 7px;
  cursor: pointer;
  li {
    margin: 15px;
  }
`;

const Baseline = styled.section`
  display: flex;
  margin-left: 500px;
  justify-content: flex-end;
  width: 100vh;
  img {
    width: 260px;
    height: 52px;
    margin-bottom: 15px;
  }
`;

export default Footer;
