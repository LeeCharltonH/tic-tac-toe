interface CardProps {
  content: string;
}

export const Card = ({ content }: CardProps) => {
  return (
    <div className="text-[44px] md:text-[84px] font-semibold bg-dark-cyan aspect-square w-20 md:w-40 flex justify-center items-center cursor-pointer">
      {content}
    </div>
  );
};
