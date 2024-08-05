import { useEffect } from 'react';
import { checkGameStatus } from '../../helpers';
import {
  useCurrentPlayer,
  useGameStatus,
  useSetWinningPlayer,
  useWinningPlayer
} from '../../stores/gameStatusStore';
import { players } from '../../consts';

export const Status = () => {
  const currentPlayer = useCurrentPlayer();
  const winningPlayer = useWinningPlayer();
  const gameStatus = useGameStatus();
  const { hasOWon, hasXWon } = checkGameStatus(gameStatus);
  const setWinningPlayer = useSetWinningPlayer();

  useEffect(() => {
    if (hasOWon || hasXWon) {
      const winner = hasXWon ? players.X : players.O;
      setWinningPlayer(winner);
    }

    return () => {
      console.log('cleanup run');
      return setWinningPlayer(null);
    };
  }, [hasOWon, hasXWon, setWinningPlayer]);

  const statusText = winningPlayer
    ? `Winner is: ${winningPlayer}`
    : `Next player is ${currentPlayer}`;

  return (
    <div className="text-2xl flex justify-center content-center flex-wrap font-bold">
      {statusText}
    </div>
  );
};
