import { useState } from "react";

const calculateWinner = (sq) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
      return sq[a];
    }
  }
  return null;
};

export function useBoard() {
  const [sq, setSq] = useState([]);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(sq);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "+" : "o");
  }

  const handleClick = (i) => {
    if (sq[i] || winner) {
      return;
    }

    const newSq = [...sq];
    newSq[i] = xIsNext ? "+" : "o";

    setSq(newSq);
    setXIsNext((xIsNext) => !xIsNext);
  };

  return [sq, handleClick, status, winner, setSq];
}
