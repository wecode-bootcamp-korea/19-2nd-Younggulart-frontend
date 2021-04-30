import React from 'react';
import styled from 'styled-components';

const Introduce = ({ intro }) => {
  const { introduction } = intro;
  return (
    <IntroduceAll>
      <hr />
      <ArtworkIntroduce>
        <i className="xi-focus-frame" />
        <h2>작품소개</h2>
      </ArtworkIntroduce>
      <p>{introduction}</p>
      <hr />
    </IntroduceAll>
  );
};

const IntroduceAll = styled.div`
  padding: 20px 0;

  p {
    margin-bottom: 35px;
  }

  hr {
    margin: 20px 0;
    border: 1px solid #eee;
  }
`;

const ArtworkIntroduce = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', 'center')}
  margin: 25px 0;

  h2 {
    font-size: 30px;
  }

  .xi-focus-frame {
    margin-right: 10px;
    font-size: 50px;
    color: ${props => props.theme.primaryColor};
  }
`;

export default Introduce;
