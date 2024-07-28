import { players, winningCombinations } from './consts';

export const checkGameStatus = (gameStatus: (string | null)[]) => {
  let hasXWon = false;
  let hasOWon = false;

  winningCombinations.forEach((winningCombination) => {
    const hasPlayerWon = hasXWon || hasOWon;

    if (hasPlayerWon) {
      return;
    }

    const cardOneValue = gameStatus[winningCombination[0]];
    const cardTwoValue = gameStatus[winningCombination[1]];
    const cardThreeValue = gameStatus[winningCombination[2]];

    hasXWon =
      cardOneValue === players.X && cardTwoValue === players.X && cardThreeValue === players.X;
    hasOWon =
      cardOneValue === players.O && cardTwoValue === players.O && cardThreeValue === players.O;
  });

  return {
    hasXWon,
    hasOWon
  };
};
