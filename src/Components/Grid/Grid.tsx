import { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return <div className="grid grid-cols-3 gap-2 md:gap-3 min-h-0 bg-cyan">{children}</div>;
};
