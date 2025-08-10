import { PropsWithChildren } from 'react';

function Tag({ children }: PropsWithChildren) {
  return (
    <li className="inline-block mr-1 mb-1 py-0.5 px-2 italic text-xs font-semibold border-2 border-black rounded-full bg-content">
      {children}
    </li>
  );
}

interface TagListProps {
  tagNames: string[];
  className?: string;
}

export function TagList({ tagNames, className = '' }: TagListProps) {
  return (
    <ul className={className}>
      {tagNames.map((tagName: string) => (
        <Tag key={tagName}>{tagName}</Tag>
      ))}
    </ul>
  );
}