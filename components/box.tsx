
export function Box({ children, dashed = false, highlighted = false }: { children: React.ReactElement[] | React.ReactElement | string, dashed?: boolean, highlighted?: boolean }): React.ReactElement {
  return (
    <div className={`flex flex-col overflow-hidden px-6 py-5 ${highlighted ? 'bg-highlight' : 'bg-content'} ${dashed ? '-mb-2px md:mb-0 md:-mr-2px border-b-2px border-r-0 md:border-r-2px md:border-b-0 border-dashed border-black' : ''}`}>
      {children}
    </div>
  );
}

export function Container({ children, cols = 'grid-cols-1' }: { children: React.ReactElement[] | React.ReactElement, cols?: string }): React.ReactElement {
  return (
    <div className={`grid gap-2px ${cols}`}>
      {children}
    </div>
  );
}