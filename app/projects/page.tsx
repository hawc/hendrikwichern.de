import { Box, Container } from '@/components/box';
import { Headline } from '@/components/headline';
import { ContentLinkBox } from '@/components/contentModules';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Link } from '@/components/link';

export default function Page() {
  return (
    <div className='grid gap-2px' style={{ "--highlight": 'var(--highlight-yellow)' } as React.CSSProperties}>
      <Header>
        <div className='font-semibold'>
          <Link href="/">Home</Link>
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
            <p>Below are a couple of websites I've built using various web technologies. Some of them are quite experimental or work-in-progress.</p>
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ContentLinkBox title='Draw' description='Multi device controller with plug-and-play renderers.' href='/projects/draw' tags={['Vue.js', 'WebSockets', 'MIDI']} />
          <ContentLinkBox title='Großwohnsiedlungen' description='Listing housing estates, in German.' href='https://grosswohnsiedlungen.de/' tags={['React', 'Tailwind', 'Prisma', 'PostgreSQL', 'Auth0', 'Mapbox', 'Cloudinary']} />
          <ContentLinkBox title='Kochen' description='A personal receipe collection, in German.' href='https://kochen.hawc.de/' tags={['React', 'GraphQL', 'Contentful', 'Auth0']} />
          <ContentLinkBox title='Dither' description='Create dithered bitmaps in the browser.' href='https://dither.hawc.de/' tags={['Vue.js', 'p5.js']} />
          <ContentLinkBox title='Sieb & Druck' description='Documenting silk-screen printing, in German.' href='https://siebdruck.hawc.de/' tags={['Vue.js']} />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
