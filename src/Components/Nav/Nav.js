import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Menu from './Menu/Menu';

const Nav = props => {
  const [menuState, setMenuState] = useState(false);
  const [colorState, setColorState] = useState(false);
  const [dataState, setDataState] = useState([]);
  const [artistDataState, setArtistData] = useState([]);
  const [inputTag, setInputTag] = useState(false);

  const findIndex = index => {
    if (index) {
      setColorState(!colorState);
    }
  };

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        setDataState(data.categories[0]);
      });
  }, []);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        setArtistData(data.categories[1]);
      });
  }, []);

  return (
    <>
      <HeaderInfo>WORLDWIDE SHIPPING - FREE RETURNS</HeaderInfo>
      <Navbar>
        <Logo>
          <img
            src="https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/logos/logo-colors-line-black-bg.178bc952.svg"
            alt=""
          />
        </Logo>
        <MainNav>
          <li
            onMouseEnter={() => setMenuState(true)}
            onMouseLeave={() => setMenuState(false)}
          >
            작품
            {menuState && (
              <MenuPopUp>
                <Menu
                  findIndex={index => findIndex(index)}
                  dataState={dataState}
                />
              </MenuPopUp>
            )}
          </li>
          <li>작가</li>
          <li>컬렉션</li>
          <li>Live</li>
        </MainNav>
        <UserTap>
          <li className="languages">KO</li>
          <Search onClick={() => setInputTag(!inputTag)}>
            <i className="xi-search"></i>
          </Search>
          {inputTag && (
            <Input
              type="text"
              placeholder="    여기에 검색어를 입력해주세요."
            />
          )}
          <li>
            <i className="xi-profile-o"></i>
          </li>
          <li>
            <i className="xi-heart-o"></i>
          </li>
          <li>
            <i className="xi-basket"></i>
          </li>
        </UserTap>
      </Navbar>
    </>
  );
};

const MenuPopUp = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-around;
  align-items: center;
  left: 500px;
  width: 1000px;
  height: 400px;
  color: black;
  background-color: ${props => props.theme.bgColor};
  text-align: left;
  li {
    padding: 2px;
  }
`;

const Navbar = styled.section`
  position: fixed;
  display: flex;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 200px;
  background: black;
  cursor: pointer;
`;

const HeaderInfo = styled.section`
  padding-top: 16px;
  height: 30px;
  background-color: black;
  color: white;
  text-align: center;
`;

const Logo = styled.span`
  margin: 70px 0 0 70px;
  width: 370px;
  height: 100px;
`;

const MainNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  width: 1250px;
  color: white;
  text-align: center;
  font-weight: 700;
  li {
    padding-left: 40px;
    font-size: 30px;
  }
`;

const UserTap = styled.ul`
  display: flex;
  margin-left: 90px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 45px;
  li {
    padding-left: 20px;
  }
  .languages {
    font-size: 25px;
  }
`;

const Search = styled.li`
  display: flex;
`;
const Input = styled.input`
  width: 300px;
  height: 45px;
  border-radius: 25px;
  background-color: #343434;
  color: white;
`;

export default Nav;
