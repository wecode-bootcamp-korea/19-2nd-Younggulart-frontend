import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonList = props => {
  return (
    <ListButton left={props.left}>
      <ListCategory>-</ListCategory>
      {props.Category &&
        props.Category.map((elm, index) => {
          return (
            <ListCategory
              onClick={() => {
                props.filterChoose(index);
              }}
            >
              {elm.name}
            </ListCategory>
          );
        })}
    </ListButton>
  );
};

const ListButton = styled.ul`
  position: absolute;
  /* padding-top: 33px; */
  padding-right: 1px;
  left: ${props => props.left};
  z-index: 10;
  top: ${props => props.top};
  width: 297px;
  height: 300px;
`;
const ListCategory = styled.div`
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  width: 298px;
  height: 50px;
  background-color: black;
  &:hover {
    background-color: ${props => props.theme.primaryColor};
  }
`;

export default ButtonList;
