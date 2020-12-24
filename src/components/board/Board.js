import React from "react";

import styled from "styled-components";
import Box from "../box/Box";

const BoardWrapper = styled.div`
  border-radius: 8px;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

const Board = (props) => {
  return (
    <BoardWrapper className="Board">
      {props.boxes.map((box, index) => (
        <Box key={index} value={box} click={props.clicked.bind(null, index)} />
      ))}
    </BoardWrapper>
  );
};

export default Board;
