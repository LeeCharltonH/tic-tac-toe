import { useState } from 'react';
import { useCurrentPlayer, useSetGameStatus } from '../../stores/gameStatusStore';

interface CardProps {
  content: string;
  onClick: () => void;
  cardNumber: number;
}

export const Card = ({ content, onClick, cardNumber }: CardProps) => {
  const [cardContent, setCardContent] = useState(content);
  const currentPlayer = useCurrentPlayer();
  const setGameStatus = useSetGameStatus();

  const onClickHandler = () => {
    setGameStatus(currentPlayer, cardNumber);
    setCardContent(currentPlayer);
    onClick();
  };

  return (
    <button
      onClick={onClickHandler}
      disabled={!!cardContent}
      className="text-[44px] md:text-[84px] font-semibold bg-dark-cyan aspect-square w-20 md:w-40 flex justify-center items-center cursor-pointer">
      {cardContent}
    </button>
  );
};
