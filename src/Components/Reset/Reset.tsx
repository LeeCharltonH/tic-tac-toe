import { useResetGame } from '../../stores/gameStatusStore';

export const Reset = () => {
  const setGameStatus = useResetGame();

  return (
    <button
      onClick={setGameStatus}
      className="h-16 px-12 max-w-full shadow-outset rounded-md text-lg font-bold border active:transition-all duration-500 active:scale-95">
      RESET
    </button>
  );
};
