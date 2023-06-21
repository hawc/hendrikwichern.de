import { Box } from './box';
import { Headline } from './headline';
import { Link } from './link';
import { TagList } from './tags';

export function ContentLinkBox({ title, description, href, tags }: { title: string, description: string, href: string, tags?: string[] }): React.ReactElement {
  return (
    <Box>
      <Headline type='h6' tag='h2'>{title}</Headline>
      <div className={tags?.length ? '' : 'flex-grow'}>{description}</div>
      {tags?.length ? <TagList className='mt-1 flex-grow' tagNames={tags} /> : <></>}
      <div className='text-right'>
        <Link arrow href={href}>this way</Link>
      </div>
    </Box>
  );
}
