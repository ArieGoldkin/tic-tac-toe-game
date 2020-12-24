import React from "react";

import styled from "styled-components";

const Button = styled.button`
  background: #62ceff;
  border: 2px solid white;
  font-size: 30px;
  color: white;
  font-weight: 700;
  outline: none;
  &:hover {
    background-color: #57bdf9;
  }
`;

const Box = (props) => {
  return <Button onClick={props.click}>{props.value}</Button>;
};

export default Box;
