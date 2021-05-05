import React, { useEffect, useState } from 'react';

const Timer = () => {
  const finish_at = '05-07 19:16';
  const [time, setTime] = useState(0);

  const remainTimer = () => {
    const startDate = new Date().getTime();
    const endDate = new Date(
      `${new Date().getFullYear()}-${finish_at}:00`
    ).getTime();
    const remainTime = endDate - startDate;

    let hours = Math.floor(remainTime / (1000 * 60 * 60));
    let minutes = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainTime % (1000 * 60)) / 1000);

    const twoDigits = time => {
      return `${time < 10 ? `0${time}` : time}`;
    };

    return `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
  };

  useEffect(() => {
    const tick = setTimeout(() => {
      setTime(remainTimer());
    }, 1000);

    return () => clearTimeout(tick);
  }, [time]);

  return <div>{time}</div>;
};

export default Timer;
