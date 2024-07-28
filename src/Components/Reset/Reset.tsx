import { useResetGame } from '../../stores/gameStatusStore';

export const Reset = () => {
  const setGameStatus = useResetGame();

  return <button onClick={setGameStatus}>Reset</button>;
};
