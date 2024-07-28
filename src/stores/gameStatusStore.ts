import { create } from 'zustand';
import { AvailablePlayers } from '../types';
import { initialGameStatus, initialPlayer } from '../consts';

interface GameStatusStore {
  currentPlayer: AvailablePlayers;
  setNextPlayer: () => void;
  gameStatus: (string | null)[];
  setGameStatus: (currentPlayer: AvailablePlayers, cardNumber: number) => void;
  winningPlayer: AvailablePlayers | null;
  setWinningPlayer: (winner: AvailablePlayers | null) => void;
  resetGame: () => void;
}

const useGameStatusStore = create<GameStatusStore>((set) => ({
  currentPlayer: initialPlayer,
  setNextPlayer: () =>
    set((state) => {
      const nextPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
      return { currentPlayer: nextPlayer };
    }),
  gameStatus: initialGameStatus,
  setGameStatus: (currentPlayer, cardNumber) =>
    set((state) => {
      const newGameStatus = state.gameStatus.slice();

      newGameStatus[cardNumber] = currentPlayer;

      return { gameStatus: newGameStatus };
    }),
  winningPlayer: null,
  setWinningPlayer: (winner) => set(() => ({ winningPlayer: winner })),
  resetGame: () =>
    set(() => ({
      currentPlayer: initialPlayer,
      gameStatus: initialGameStatus,
      winningPlayer: null
    }))
}));

export const useCurrentPlayer = () => useGameStatusStore((state) => state.currentPlayer);
export const useSetNextPlayer = () => useGameStatusStore((state) => state.setNextPlayer);
export const useGameStatus = () => useGameStatusStore((state) => state.gameStatus);
export const useSetGameStatus = () => useGameStatusStore((state) => state.setGameStatus);
export const useWinningPlayer = () => useGameStatusStore((state) => state.winningPlayer);
export const useSetWinningPlayer = () => useGameStatusStore((state) => state.setWinningPlayer);
export const useResetGame = () => useGameStatusStore((state) => state.resetGame);
