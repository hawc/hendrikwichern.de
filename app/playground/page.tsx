import { Box, Container } from '@/components/box';
import { Headline } from '@/components/headline';
import { ContentLinkBox } from '@/components/contentModules';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Link } from '@/components/link';
import { MotionBox } from '../motion';

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
            <Headline type='h1'>Playground</Headline>
          </Box>
        </Container>
        <Container>
          <MotionBox>
            <p>Below are a couple of experiments using different web technologies.</p>
          </MotionBox>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ContentLinkBox title='Draw' description='Multi device controller with plug-and-play renderers.' href='/playground/draw' tags={['WebSockets', 'MIDI', 'Vue.js']} />
          <ContentLinkBox title='Dither' description='Create dithered bitmaps in the browser.' href='https://dither.hawc.de/' tags={['p5.js', 'Vue.js']} />
          <ContentLinkBox title='Kochen' description='A personal receipe collection, in German.' href='https://kochen.hawc.de/' tags={['GraphQL', 'React', 'Auth0 API']} />
          <ContentLinkBox title='Sieb & Druck' description='Documenting silk-screen printing, in German.' href='https://siebdruck.hawc.de/' tags={['Vue.js']} />
          <ContentLinkBox title='Scrobble Info' description='Receive push notifications for music you are currently playing.' href='https://scrobble-info.hawc.de/' tags={['last.fm API']} />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
