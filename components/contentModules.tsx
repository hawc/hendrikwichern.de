import { Box } from './box';
import { Headline } from './headline';
import { Link } from './link';
import { TagList } from './tags';

export function ContentLinkBox({ title, description, href, tags }: { title: string, description: string, href: string, tags?: string[]; }) {
  return (
    <Box contrast>
      <Headline className='mb-2' type='h6' tag='h2'>{title}</Headline>
      <div className={tags?.length ? '' : 'flex-grow'}>{description}</div>
      {tags?.length ? <TagList className='mt-2 flex-grow' tagNames={tags} /> : <></>}
      <div className='mt-2 text-right'>
        <Link arrow href={href}>this way</Link>
      </div>
    </Box>
  );
}
