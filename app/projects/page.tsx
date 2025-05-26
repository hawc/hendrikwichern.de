import { Box, Container } from '@/components/box';
import { ContentLinkBox } from '@/components/contentModules';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Headline } from '@/components/headline';
import { Link } from '@/components/link';

export default function Page() {
  return (
    <div className='grid gap-2px' style={{ '--highlight': 'var(--highlight-yellow)' } as React.CSSProperties}>
      <Header>
        <div className='font-semibold'>
          <Link href='/'>Home</Link>
        </div>
      </Header>
      <main className='grid gap-2px'>
        <Container>
          <Box highlighted>
            <Headline type='h1'>Projects</Headline>
          </Box>
        </Container>
        <Container>
          <Box>
            <p>This is a collection of websites and apps I've built. Some are finished products, others are still in progress - I'm always tinkering with new ideas and technologies.</p>
            <p>I work primarily with React and Vue.js for frontend development, often paired with Next.js. For data storage, I use MongoDB and PostgreSQL, and I enjoy integrating various APIs like OpenAI, Mapbox, and Auth0. I'm particularly interested in real-time features, which is why you'll find WebSockets and MIDI implementations in some of my projects.</p>
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ContentLinkBox title='Journo' description='News crawler & AI-powered search engine, in German.' href='https://journo.hawc.de/' tags={['React', 'Next.js', 'Playwright', 'OpenAI', 'MongoDB', 'Auth0']} />
          <ContentLinkBox title='Draw' description='Multi device controller with plug-and-play renderers.' href='/projects/draw' tags={['Vue.js', 'WebSockets', 'MIDI']} />
          <ContentLinkBox title='Großwohnsiedlungen' description='Listing housing estates, in German.' href='https://grosswohnsiedlungen.de/' tags={['React', 'Tailwind', 'Prisma', 'PostgreSQL', 'Auth0', 'Mapbox', 'Cloudinary']} />
          <ContentLinkBox title='Kochen' description='A personal receipe collection, in German.' href='https://kochen.hawc.de/' tags={['React', 'GraphQL', 'Contentful', 'Auth0']} />
          <ContentLinkBox title='Dither' description='Create dithered bitmaps in the browser.' href='https://dither.hawc.de/' tags={['Vue.js', 'p5.js']} />
          <ContentLinkBox title='Sieb & Druck' description='Documenting silk-screen printing, in German.' href='https://siebdruck.hawc.de/' tags={['Vue.js']} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
