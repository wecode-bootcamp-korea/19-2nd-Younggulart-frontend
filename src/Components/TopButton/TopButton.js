import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TopButton = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    return () => {
      document.removeEventListener('scroll', () => {
        showButton();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      showButton();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  const showButton = () => {
    if (isShow && window.pageYOffset < 100) {
      setIsShow(false);
    } else if (!isShow && window.pageYOffset > 100) {
      setIsShow(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    isShow && (
      <Button onClick={scrollToTop}>
        <i className="xi-angle-up-thin" />
      </Button>
    )
  );
};

export default TopButton;

const Button = styled.div`
  position: fixed;
  width: 3rem;
  height: 3rem;
  right: 50px;
  bottom: 60px;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  z-index: 9999;
  cursor: pointer;

  i {
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeightBold};
    padding: 0.7rem;
    color: white;
  }
`;
