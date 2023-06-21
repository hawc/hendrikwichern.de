export function Headline({ children, type, tag = type }: { children: string, type: string, tag?: string }) {
  const Tag = tag as keyof JSX.IntrinsicElements;
  const headlineStyles: { [key: string]: string } = {
    'h1': 'font-bold text-5xl md:text-6xl lg:text-7xl leading-negative tracking-tighter',
    'h2': 'text-4xl',
    'h3': 'text-3xl leading-tight',
    'h4': 'font-bold text-2xl',
    'h5': 'text-2xl',
    'h6': 'font-bold',
  };
  const headlineClass = type in headlineStyles ? headlineStyles[type] : '';
  return (
    <Tag className={`${headlineClass}`}>
      {children}
    </Tag>
  );
}