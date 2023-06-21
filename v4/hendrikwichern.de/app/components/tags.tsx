
function Tag({ children }: { children: string }) {
  return (
    <li>
      {children}
    </li>
  );
}

export function TagList({ tagNames }: { tagNames: string[] }) {
  return (
    <ul>
      {tagNames.map((tagName: string) => (
        <Tag key={tagName}>{tagName}</Tag>
      ))}
    </ul>
  );
}