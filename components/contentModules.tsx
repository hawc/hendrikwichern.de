import { Box } from './box';
import { Headline, HeadlineType } from './headline';
import { Link } from './link';
import { TagList } from './tags';

interface ContentLinkBoxProps {
  title: string;
  description: string;
  href: string;
  titleType?: HeadlineType;
  linkTitle?: string;
  tags?: string[];
  github?: string;
}

export function ContentLinkBox({ title, description, href, titleType = 'h4', linkTitle, tags, github }: ContentLinkBoxProps) {
  return (
    <Box contrast>
      <Headline className='mb-2' type={titleType} tag='h2'>{title}</Headline>
      <div className={tags?.length ? '' : 'flex-grow'}>{description}</div>
      {tags?.length ? <TagList className='mt-2 flex-grow' tagNames={tags} /> : null}
      <div className='mt-2 text-right flex flex-row justify-between'>
        <Link arrow={!linkTitle} href={href}>{linkTitle || 'this way'}</Link>
        {github && (
          <Link href={github}>
            <span className='print:hidden'>GitHub</span>
            <span className='print:block hidden'>{github.replace('https://', '')}</span>
          </Link>
        )}
      </div>
    </Box>
  );
}
