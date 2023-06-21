
export function Box({ children, highlighted = false }: { children: React.ReactElement[] | React.ReactElement | string, highlighted?: boolean }): React.ReactElement {
  return (
    <div className={`flex flex-col px-6 py-5 ${highlighted ? 'bg-highlight' : 'bg-content'}`}>
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