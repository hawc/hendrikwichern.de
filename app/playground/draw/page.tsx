import { Box, Container } from '@/components/box';
import { Headline } from '@/components/headline';
import { ContentLinkBox } from '@/components/contentModules';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Link } from '@/components/link';
import { MotionBox } from '@/app/motion';

export default function Page() {
  return (
    <div className='grid gap-2px' style={{ "--highlight": 'var(--highlight-blue)' } as React.CSSProperties}>
      <Header>
        <div className='font-semibold'>
          <Link href="/playground">Playground</Link>
        </div>
      </Header>
      <main className='grid gap-2px'>
        <Container>
          <Box highlighted>
            <Headline type='h1'>Draw</Headline>
          </Box>
        </Container>
        <Container>
          <MotionBox>
            <p>Hi! This is a (work-in-progress) playground for WebGL rendering with user input.</p>
            <p>It's written in TypeScript and Vue, and uses peer-to-peer connections via WebSockets. Bonus: Web MIDI API. The MIDI output from your “Maschine Mikro MK3” or “Intech Grid PO16” can directly control the rendering. Works best for “Object” and “Wave”.</p>
            <p>Go to one of the linked pages below, scan the displayed QR code or click on the controller icon. You'll be forwarded to a control page.</p>
          </MotionBox>
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
