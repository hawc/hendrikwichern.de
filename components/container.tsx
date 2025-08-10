import { PropsWithChildren } from 'react';

interface ContainerProps {
  className?: string;
  cols?: string; 
}

export function Container({ children, className = '', cols = 'grid-cols-1' }: PropsWithChildren<ContainerProps>) {
  return (
    <div className={`grid gap-2px ${cols} ${className}`}>
      {children}
    </div>
  );
}