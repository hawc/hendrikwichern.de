import { Box, Container } from '@/components/box';
import { Headline } from '@/components/headline';
import { ContentLinkBox } from '@/components/contentModules';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Link } from '@/components/link';

export default function Page() {
  return (
    <div className='grid gap-2px' style={{ '--highlight': 'var(--highlight-blue)' } as React.CSSProperties}>
      <Header>
        <div className='font-semibold'>
          <Link href='/projects'>Projects</Link>
        </div>
      </Header>
      <main className='grid gap-2px'>
        <Container>
          <Box highlighted>
            <Headline type='h1'>Draw</Headline>
          </Box>
        </Container>
        <Container>
          <Box>
            <p>Hi! This is a playground for remote controlling different types of web content.</p>
            <p>It's written in TypeScript and Vue.js/Nuxt, and uses peer-to-peer connections via WebSockets for controlling the input. It runs on DigitalOcean, proxied by an nginx webserver.</p>
            <p>The renderers linked below use various frameworks or technologies for client side rendering, e.g. Three.js, p5.js or simple SVG + CSS.</p>
            <p>For setting the input values, you can either change them directly in the browser, or connect your mobile device via the shown QR code. It's possible to control the input by specific MIDI devices (Web MIDI API) and audio input (Web Audio API) as well, even though it looks best for only some of them (like "Remote Sky", "Object" and "Wave").</p>
            <p>As most of the 3d rendering logic is not performance optimized, this is consideres desktop only right now.</p>
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ContentLinkBox title='Ink' description='Digital text thrasher.' href='https://draw.hawc.de/ink' tags={['SVG', 'CSS']} />
          <ContentLinkBox title='Remote Sky' description='Create your own planet.' href='https://draw.hawc.de/remote-sky' tags={['p5.js']} />
          <ContentLinkBox title='Beton' description='Build your own Plattenbau.' href='https://draw.hawc.de/beton' tags={['Three.js']} />
          <ContentLinkBox title='Object' description='Shiny pyramid stuff.' href='https://draw.hawc.de/object' tags={['Three.js']} />
          <ContentLinkBox title='Wave' description='Many lines form a wave.' href='https://draw.hawc.de/wave' tags={['Three.js']} />
          <ContentLinkBox title='GitHub' description='Check out the repo on GitHub.' href='https://github.com/hawc/draw' />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
