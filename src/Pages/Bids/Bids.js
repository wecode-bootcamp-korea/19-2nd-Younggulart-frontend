import React, { useEffect, useState } from 'react';
import { BIDS_BACKGROUND } from '../../config';
import DatePicker from 'react-horizontal-datepicker';
import ScheduleList from './Components/ScheduleList';
import Loading from '../../Components/Loading/Loading';
import Theme from '../../styles/Theme';
import styled from 'styled-components';

const Bids = () => {
  const formatDate = date => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const [day, setDay] = useState(formatDate(new Date()));
  const [itemCount, setItemCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [bidsLists, setBidsLists] = useState([]);
  const [target, setTarget] = useState(null);

  const selectedDay = day => {
    setItemCount(1);
    setDay(formatDate(day));
  };

  const fetchBidsLists = () => {
    setIsLoading(true);
    setTimeout(() => {
      // fetch(`${BIDS_API}${day}`)
      fetch('data/bidsData.json')
        .then(res => res.json())
        .then(bidsData => {
          setIsLoading(!(bidsData.auctions.length === itemCount));
          setBidsLists(bidsData.auctions.slice(0, itemCount));
        });
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    return () => setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBidsLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day]);

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(callback, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  const callback = ([entry], observer) => {
    if (entry.isIntersecting) {
      fetchBidsLists();
      setItemCount(itemCount + 1);
      observer.observe(target);
    }
  };

  return (
    <Wrapper isFirstLoading={!bidsLists.length}>
      <i className="xi-calendar-check" />
      <Header type="title">오프라인 경매일정</Header>
      <Header type="subTitle">매일 열리는 경매 일정을 확인하세요.</Header>
      <Calendar>
        <DatePicker
          getSelectedDay={selectedDay}
          labelFormat={'MMMM'}
          endDate={90}
          color={Theme.primaryColor}
        />
      </Calendar>
      {bidsLists.map((bidsList, index) => (
        <ScheduleList key={index} id={index + 1} bidsList={bidsList} />
      ))}
      {isLoading && <Loading forwardRef={setTarget} />}
    </Wrapper>
  );
};

export default Bids;

const Wrapper = styled.div`
  padding: 15rem 0 10rem 0;
  background: url(${BIDS_BACKGROUND}) repeat;
  height: ${({ isFirstLoading }) => isFirstLoading && '100vh'};
  background-size: auto;
  opacity: 0.9;
  text-align: center;

  .xi-calendar-check {
    padding-bottom: 1rem;
    font-size: 4rem;
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const Header = styled.h1`
  padding: 0.5rem;
  font-size: ${({ type, theme }) =>
    type === 'title' ? '3rem' : theme.fontSizeMedium};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: white;
`;

const Calendar = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 3rem 0;
  color: white;
`;
