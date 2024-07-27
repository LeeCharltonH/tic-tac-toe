import { create } from 'zustand';
import { AvailablePlayers } from '../types';

interface GameStatusStore {
  currentPlayer: AvailablePlayers;
  setNextPlayer: () => void;
}

const useGameStatusStore = create<GameStatusStore>((set) => ({
  currentPlayer: 'X',
  setNextPlayer: () =>
    set((state) => {
      const nextPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
      return { currentPlayer: nextPlayer };
    })
}));

export const useCurrentPlayer = () => useGameStatusStore((state) => state.currentPlayer);
export const useSetNextPlayer = () => useGameStatusStore((state) => state.setNextPlayer);
