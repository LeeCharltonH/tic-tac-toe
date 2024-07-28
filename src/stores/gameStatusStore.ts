import { create } from 'zustand';
import { AvailablePlayers } from '../types';

interface GameStatusStore {
  currentPlayer: AvailablePlayers;
  setNextPlayer: () => void;
  gameStatus: (string | null)[];
  setGameStatus: (currentPlayer: AvailablePlayers, cardNumber: number) => void;
  winningPlayer: AvailablePlayers | null;
  setWinningPlayer: (winner: AvailablePlayers | null) => void;
}

const useGameStatusStore = create<GameStatusStore>((set) => ({
  currentPlayer: 'X',
  setNextPlayer: () =>
    set((state) => {
      const nextPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
      return { currentPlayer: nextPlayer };
    }),
  gameStatus: Array(9).fill(null),
  setGameStatus: (currentPlayer, cardNumber) =>
    set((state) => {
      const newGameStatus = state.gameStatus.slice();

      newGameStatus[cardNumber] = currentPlayer;

      return { gameStatus: newGameStatus };
    }),
  winningPlayer: null,
  setWinningPlayer: (winner) => set(() => ({ winningPlayer: winner }))
}));

export const useCurrentPlayer = () => useGameStatusStore((state) => state.currentPlayer);
export const useSetNextPlayer = () => useGameStatusStore((state) => state.setNextPlayer);
export const useGameStatus = () => useGameStatusStore((state) => state.gameStatus);
export const useSetGameStatus = () => useGameStatusStore((state) => state.setGameStatus);
export const useWinningPlayer = () => useGameStatusStore((state) => state.winningPlayer);
export const useSetWinningPlayer = () => useGameStatusStore((state) => state.setWinningPlayer);
