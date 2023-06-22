import { MotionBox } from '@/app/motion';
import { Headline } from './headline';
import { Link } from './link';
import { TagList } from './tags';

export function ContentLinkBox({ title, description, href, tags }: { title: string, description: string, href: string, tags?: string[] }): React.ReactElement {
  return (
    <MotionBox
      initial={{ y: Math.random() * 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, type: "easeOut" }}>
      <Headline type='h6' tag='h2'>{title}</Headline>
      <div className={tags?.length ? '' : 'flex-grow'}>{description}</div>
      {tags?.length ? <TagList className='mt-1 flex-grow' tagNames={tags} /> : <></>}
      <div className='text-right'>
        <Link arrow href={href}>this way</Link>
      </div>
    </MotionBox>
  );
}
