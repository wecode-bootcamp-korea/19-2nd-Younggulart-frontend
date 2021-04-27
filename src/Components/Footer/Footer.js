import React from 'react';
import { LOGO } from '../../config';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <FooterManu>
<<<<<<< HEAD
        <LogoImg src={LOGO.image} alt="logoImage" />
        {FOOTER_CONTENTS.map((content, index) => {
          const { title, sub } = content;
          return (
            <Information key={index}>
              <InfoTitle>{title}</InfoTitle>
              <InfoList>
                {sub.map((menu, index) => {
                  return <p key={index}>{menu}</p>;
                })}
              </InfoList>
            </Information>
          );
        })}
=======
        <LogoImg
          src="https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/logos/logo-colors-square-black-bg.9f4d2cd2.svg"
          alt="로고"
        />
        <Information>
          <InfoTitle>고객센터</InfoTitle>
          <InfoList>
            {INFO.map((data, idx) => {
              return <div key={idx}>{data.name}</div>;
            })}
          </InfoList>
        </Information>
        <Information>
          <InfoTitle>회사소개</InfoTitle>
          <InfoList>
            {CP.map((elm, index) => {
              return <div key={index}>{elm}</div>;
            })}
          </InfoList>
        </Information>
        <Information>
          <InfoTitle>작가신가요?</InfoTitle>
          <InfoList>제휴 작가 등록 신청</InfoList>
          <InfoList>내 계정 (younggleart작가 전용)</InfoList>
        </Information>
>>>>>>> fb9e750... 메인 수정
      </FooterManu>
      <Baseline>
        <img src={LOGO.base} alt="baseImage" />
      </Baseline>
    </Container>
  );
};

const FOOTER_CONTENTS = [
  {
    title: '고객센터',
    sub: ['문의하기', '법적공지', '구매 일반약관', '고객후기'],
  },
  {
    title: '회사소개',
    sub: ['Youngguleart 소개', '제휴작가', '블로그', '조직도'],
  },
  {
    title: '작가신가요?',
    sub: ['제휴 작가 등록 신청', '내 계정 (Youngguleart 작가 전용)'],
  },
];

const Container = styled.section`
  width: 100%;
  background-color: black;
`;
const FooterManu = styled.section`
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const LogoImg = styled.img`
  width: 12%;
  height: 100%;
`;

const Information = styled.ul`
  color: white;
`;

const InfoTitle = styled.li`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
  cursor: pointer;
`;

const InfoList = styled.li`
  cursor: pointer;
<<<<<<< HEAD

  p {
    margin: 1rem 0;
=======
  div {
    margin: 15px;
>>>>>>> fb9e750... 메인 수정
  }
`;

const Baseline = styled.section`
  display: flex;
  margin-left: 35rem;
  justify-content: flex-end;
  width: 100vh;

  img {
    width: 30%;
    margin-bottom: 1rem;
  }
`;

export default Footer;
