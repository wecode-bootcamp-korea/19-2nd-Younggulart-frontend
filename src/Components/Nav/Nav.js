import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './Menu/Menu';
import Login from '../../Pages/Login/Login';
import { LOGO } from '../../config';

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
        setArtistData(data.categories[1]);
      });
  }, []);

  return (
    <NavbarFix>
      <HeaderInfo>WORLDWIDE SHIPPING - FREE RETURNS</HeaderInfo>
      <Navbar>
        <Logo>
          <Link to="/">
            <img src={LOGO} alt="logoImage" />
          </Link>
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
          <BidsLi>
            <Link to="/bids">경매일정</Link>
          </BidsLi>
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
          <LoginLi>
            <Login />
          </LoginLi>
          <li>
            <i className="xi-heart-o" />
          </li>
          <li>
            <i className="xi-basket" />
          </li>
        </UserTap>
      </Navbar>
    </NavbarFix>
  );
};

const NavbarFix = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
`;

const MenuPopUp = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center')}
  position: absolute;
  flex-direction: column;
  left: 15rem;
  width: 1000px;
  height: 400px;
  color: black;
  background-color: ${({ theme }) => theme.bgColor};
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
  height: 15vh;
  background: black;
  cursor: pointer;
`;

const HeaderInfo = styled.section`
  padding-top: 1rem;
  height: 30px;
  background-color: black;
  color: white;
  text-align: center;
`;

const Logo = styled.span`
  margin: auto 1rem;

  img {
    width: 300px;
  }
`;

const MainNav = styled.ul`
  ${({ theme }) => theme.flexSet('center', 'center')}
  min-width: 500px;
  padding-right: 5rem;
  width: 100%;
  color: white;
  text-align: center;
  font-weight: 700;

  li {
    padding: 0 1.5rem;
    font-size: 1.5rem;
  }
`;

const BidsLi = styled.li`
  a:link {
    color: white;
    text-decoration: none;
  }
  a:visited {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: white;
    text-decoration: none;
  }
`;

const UserTap = styled.ul`
  ${({ theme }) => theme.flexSet('center', 'center')}
  margin-right: 3rem;
  color: white;
  font-size: 2rem;

  li {
    padding: 0 0.5rem;
  }

  .languages {
    font-size: 1.5rem;
  }
`;

const LoginLi = styled.li`
  color: ${({ theme }) => theme.black};
`;

const Search = styled.li`
  display: flex;
`;

const Input = styled.input`
  width: 300px;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #343434;
  color: white;
`;

export default Nav;
