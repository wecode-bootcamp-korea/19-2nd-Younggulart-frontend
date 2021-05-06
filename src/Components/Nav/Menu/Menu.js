import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Menu = props => {
  const [change, setchange] = useState(false);
  const [sub, setSub] = useState([]);
  const [img, setImg] = useState([]);
  const history = useHistory();

  const ishovered = index => {
    setchange(!change);
    setSub(props.dataState[index].themes);
    setImg(props.dataState[index]);
  };

  const goToList = () => {
    history.push('/productlist');
  };

  return (
    <Menus>
      <TitleMenus>
        {props.dataState.map((elm, index) => (
          <Titles
            onMouseEnter={() => {
              ishovered(index);
            }}
            onClick={goToList}
            key={index}
          >
            {elm.media_name}
          </Titles>
        ))}
      </TitleMenus>
      <SubMenu1>
        <TitleName>테마</TitleName>
        {sub.map((elm, idxs) => {
          return <List key={idxs}>{elm.theme_name}</List>;
        })}
      </SubMenu1>
      <SubMenu2 src={img.media_image}></SubMenu2>
    </Menus>
  );
};

const Menus = styled.section`
  display: flex;
`;
const TitleMenus = styled.div`
  position: absolute;
  padding: 10px 40px;
  font-size: 22px;
  font-weight: 500;
  left: 0;
  top: 30px;
  cursor: pointer;
`;
const Titles = styled.a`
  display: block;
  padding: 10px 20px;
  &:hover {
    padding-left: 50px;
    color: ${props => props.theme.primaryColor};
    &::before {
      content: '>';
    }
  }
`;

const SubMenu1 = styled.section`
  position: relative;
  height: 400px;
  width: 330px;
  padding-top: 69px;
  background-color: white;
`;

const List = styled.a`
  display: block;
  margin: 15px 40px;
  color: black;
  font-weight: 300;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`;

const SubMenu2 = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 330px;
  height: 400px;
`;

const TitleName = styled.h1`
  position: absolute;
  left: 20px;
  top: 40px;
  font-size: 20px;
  color: ${props => props.theme.primaryColor};
`;

export default Menu;
