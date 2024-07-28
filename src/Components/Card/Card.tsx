import { useEffect, useState } from 'react';
import { useCurrentPlayer, useSetGameStatus, useWinningPlayer } from '../../stores/gameStatusStore';

interface CardProps {
  content: string | null;
  onClick: () => void;
  cardNumber: number;
}

export const Card = ({ content, onClick, cardNumber }: CardProps) => {
  const [cardContent, setCardContent] = useState(content);
  const currentPlayer = useCurrentPlayer();
  const setGameStatus = useSetGameStatus();
  const winningPlayer = useWinningPlayer();

  const onClickHandler = () => {
    setGameStatus(currentPlayer, cardNumber);
    setCardContent(currentPlayer);
    onClick();
  };

  useEffect(() => {
    setCardContent(content);
  }, [content]);

  return (
    <button
      onClick={onClickHandler}
      disabled={!!cardContent || !!winningPlayer}
      className="text-[44px] md:text-[84px] font-semibold bg-dark-cyan aspect-square w-20 md:w-40 flex justify-center items-center cursor-pointer">
      {cardContent}
    </button>
  );
};
