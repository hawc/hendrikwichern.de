import { Box, Container } from '@/components/box';
import { Headline } from '@/components/headline';
import { ContentLinkBox } from '@/components/contentModules';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function Page() {
  return (
    <>

      <Header>
        <Link href="/" className='font-semibold'>Home</Link>
      </Header>
      <main style={{ "--highlight": 'var(--highlight-magenta)' } as React.CSSProperties} className='grid gap-px'>
        <Container>
          <Box highlighted>
            <Headline type='h1'>CV</Headline>
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ContentLinkBox title='Draw' description='Multi device controller with plug-and-play renderers.' href='/' tags={['WebSockets', 'MIDI', 'Vue.js']} />
          <ContentLinkBox title='Dither' description='Create dithered bitmaps in the browser.' href='/' tags={['p5.js', 'Vue.js']} />
          <ContentLinkBox title='Kochen' description='A personal receipe collection, in German.' href='/' tags={['GraphQL', 'React', 'Auth0 API']} />
          <ContentLinkBox title='Sieb & Druck' description='Documenting silk-screen printing, in German.' href='/' tags={['Vue.js']} />
          <ContentLinkBox title='Scrobble Info' description='Receive push notifications for music you are currently playing.' href='/' tags={['last.fm API']} />
        </Container>
      </main>
      <Footer />
    </>
  )
}
