export function ListItem({ children, isPlus, isNested }: { children: React.ReactElement[] | React.ReactElement | string, isPlus?: boolean, isNested?: boolean }) {
  return (
    <li className="ml-4" style={isNested ? { 'listStyleType': 'none' } : isPlus ? { 'listStyleType': "'+ '" } : { 'listStyleType': "'• '" }}>
      {children}
    </li>
  );
}

export function List({ children }: { children: React.ReactElement[] | React.ReactElement | string }) {
  return (
    <ul className='list-disc list-outside'>
      {children}
    </ul>
  );
}