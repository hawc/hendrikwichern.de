import { PropsWithChildren } from "react";

export function ListItem({ children, isPlus, isNested }: PropsWithChildren<{ isPlus?: boolean, isNested?: boolean; }>) {
  return (
    <li className="ml-4 my-1" style={isNested ? { 'listStyleType': 'none' } : isPlus ? { 'listStyleType': "'+ '" } : { 'listStyleType': "'• '" }}>
      {children}
    </li>
  );
}

export function List({ children }: PropsWithChildren) {
  return (
    <ul className='list-disc list-outside'>
      {children}
    </ul>
  );
}