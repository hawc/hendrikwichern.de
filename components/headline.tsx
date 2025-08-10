import { PropsWithChildren } from 'react';

export type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadlineProps {
  type: HeadlineType;
  tag?: string;
  className?: string;
}

export function Headline({ children, type, tag = type, className = '' }: PropsWithChildren<HeadlineProps>) {
  const Tag = tag as keyof JSX.IntrinsicElements;
  const headlineStyles: { [key in HeadlineType]: string } = {
    'h1': 'font-bold text-5xl md:text-6xl lg:text-7xl leading-negative tracking-tighter',
    'h2': 'text-4xl print:text-3xl',
    'h3': 'text-3xl leading-tight',
    'h4': 'font-bold text-2xl print:text-xl',
    'h5': 'text-2xl',
    'h6': 'font-bold',
  };
  const headlineClass = type in headlineStyles ? headlineStyles[type] : '';
  return (
    <Tag className={`${headlineClass} ${className}`}>
      {children}
    </Tag>
  );
}