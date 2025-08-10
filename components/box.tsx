import { PropsWithChildren } from 'react';

interface BoxProps {
  className?: string;
  dashed?: boolean;
  highlighted?: boolean;
  contrast?: boolean;
}

export function Box({ children, className = '', dashed = false, highlighted = false, contrast = false }: PropsWithChildren<BoxProps>) {
  return (
    <div className={`flex flex-col overflow-hidden px-6 py-5 ${highlighted ? 'bg-highlight' : contrast ? "bg-contrast" : 'bg-content'} ${dashed ? '-mb-2px md:mb-0 md:-mr-2px border-b-2px border-r-0 md:border-r-2px md:border-b-0 border-dashed border-black print:border-0' : ''} ${className}`}>
      {children}
    </div>
  );
}

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