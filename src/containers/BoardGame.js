import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { calculateGameWinner } from "../helpers/helpers";
import Board from "../components/board/Board";

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: #4054c6;
`;

const StartGameButton = styled.button`
  background: #ffffff;
  color: #f780a7;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #f780a7;
  border-radius: 3px;
  outline: none;
  &:hover {
    color: #ffffff;
    background: #f780a7;
  }
`;

const ResultDiv = styled.div`
  margin: 1rem;
  font-size: 2rem;
  font-weight: 900;
  color: #ff6c3e;
`;

const BoardGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [numberOfOptions, setNumberOfOptions] = useState(0);

  const gameWinner = calculateGameWinner(board);

  const startNewGameHandler = () => {
    setNumberOfOptions(0);
    setBoard(Array(9).fill(null));
  };

  const handleClick = (index) => {
    const currentGameBoard = [...board];
    if (gameWinner || currentGameBoard[index]) {
      return;
    }
    setNumberOfOptions((prevNumber) => prevNumber + 1);
    currentGameBoard[index] = currentPlayer ? "X" : "O";
    setBoard(currentGameBoard);
    setCurrentPlayer((prevPlayer) => !prevPlayer);
  };

  useEffect(() => {
    if (numberOfOptions === 9) {
      alert("no winners");
    }
  }, [numberOfOptions]);

  let resultText = gameWinner
    ? "Winner: " + gameWinner
    : "Next Player: " + (currentPlayer ? "X" : "O");
  return (
    <>
      <Title>Tic Tac Toe Game</Title>
      <Board boxes={board} clicked={handleClick} />
      <ResultDiv>{resultText}</ResultDiv>
      <StartGameButton onClick={startNewGameHandler}>
        Start New Game
      </StartGameButton>
    </>
  );
};

export default BoardGame;
