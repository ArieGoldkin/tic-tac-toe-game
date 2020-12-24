import React from "react";

import styled from "styled-components";

import BoardGame from "./containers/BoardGame";

const StyledWrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <StyledWrapper>
      <BoardGame />
    </StyledWrapper>
  );
};

export default App;
