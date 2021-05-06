import React from 'react';
import styled, { css } from 'styled-components';

const FilterIcon = props => {
  return (
    <>
      <Icon left={props.left}>
        <IconTitle>{props.IconTitles}</IconTitle>
        <DirectionIcon1>{props.Icons}</DirectionIcon1>
        <DirectionIcon2>{props.Icons}</DirectionIcon2>
        <DirectionIcon3>{props.Icons}</DirectionIcon3>
      </Icon>
    </>
  );
};
const IconStyle = css`
  ${({ theme }) => theme.flexSet('center', 'center')}
  background-color: white;
  width: 42px;
  height: 32px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.primaryColor};
    color: white;
    cursor: pointer;
  }
`;
const Icon = styled.ul`
  ${({ theme }) => theme.flexSet('center', 'center')}
  position: absolute;
  left: ${props => props.left};
  width: 130px;
  height: 38px;
`;
const IconTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 600;
  position: absolute;
  top: -20px;
`;
const DirectionIcon1 = styled.li`
  ${IconStyle}
  span {
    background-color: ${props => props.theme.gray};
    width: 22px;
    height: 12px;
  }
`;
const DirectionIcon2 = styled.li`
  ${IconStyle}
  span {
    background-color: ${props => props.theme.gray};
    width: 12px;
    height: 22px;
  }
  i {
    font-size: 20px;
  }
`;
const DirectionIcon3 = styled.li`
  ${IconStyle}
  span {
    background-color: ${props => props.theme.gray};
    width: 22px;
    height: 22px;
  }
  i {
    font-size: 30px;
  }
`;

export default FilterIcon;
