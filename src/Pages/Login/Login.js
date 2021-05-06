import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { API, KAKAO } from '../../config';
import Modal from '../../Components/Modal/Modal';
import styled from 'styled-components';

const Login = () => {
  const { Kakao } = window;
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogined, setIsLogined] = useState(false);

  const handleModal = status => {
    setModalOpen(status);
  };

  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: function (res) {
        setModalOpen(false);
        localStorage.setItem('access_token', res.access_token);

        fetch(`${API}/users/login/kakao`, {
          method: 'POST',
          headers: {
            Authorization: res.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.ACCESS_TOKEN) {
              history.push('/');
              setIsLogined(true);
              alert('로그인!');
            } else {
              alert('로그인 실패!');
            }
          });
      },
      fail: function (err) {
        // console.log('kakao login 오류', err);
      },
    });
  };

  const kakaoLogout = () => {
    Kakao.Auth.logout(() => {
      alert('로그아웃!');
    });
    localStorage.clear();
    setIsLogined(false);
  };

  return (
    <>
      {isLogined ? (
        <Button onClick={kakaoLogout}>
          <i className="xi-log-out" />
        </Button>
      ) : (
        <Button
          onClick={() => {
            handleModal(true);
          }}
        >
          <i className="xi-profile-o" />
        </Button>
      )}
      {modalOpen && (
        <Modal
          open={modalOpen}
          close={() => {
            handleModal(false);
          }}
          header="소셜 로그인"
        >
          <KakaoBtn onClick={kakaoLogin} src={KAKAO.loginBtn}></KakaoBtn>
          <FindPassword href={KAKAO.findPassword} target="_blank">
            비밀번호를 잊으셨나요?
          </FindPassword>
        </Modal>
      )}
    </>
  );
};

const Button = styled.button`
  background: transparent;
  color: white;
  font-size: 2rem;
`;

const KakaoBtn = styled.img`
  width: 70%;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const FindPassword = styled.a`
  display: block;
  padding: 2rem 0 1rem 0;
  font-size: ${({ theme }) => theme.fontSizeSmall};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme }) => theme.black};
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
  }
`;

export default Login;
