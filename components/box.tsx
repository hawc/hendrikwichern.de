
export function Box({ children, dashed = false, highlighted = false }: { children: React.ReactElement[] | React.ReactElement | string, dashed?: boolean, highlighted?: boolean }): React.ReactElement {
  return (
    <div className={`flex flex-col px-6 py-5 ${highlighted ? 'bg-highlight' : 'bg-content'} ${dashed ? '-mb-px md:mb-0 md:-mr-px border-b border-r-0 md:border-r md:border-b-0 border-dashed border-black' : ''}`}>
      {children}
    </div>
  );
}

export function Container({ children, cols = 'grid-cols-1' }: { children: React.ReactElement[] | React.ReactElement, cols?: string }): React.ReactElement {
  return (
    <div className={`grid ${cols} gap-px`}>
      {children}
    </div>
  );
}