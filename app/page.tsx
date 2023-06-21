import { Box, Container } from '@/components/box';
import { Headline } from '@/components/headline';
import { ContentLinkBox } from '@/components/contentModules';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <div className='grid gap-px' style={{ "--highlight": 'var(--highlight-teal)' } as React.CSSProperties}>
      <Header />
      <main className='grid gap-px'>
        <Container>
          <Box highlighted>
            <Headline type='h1'>Hi there!</Headline>
          </Box>
        </Container>
        <Container>
          <Box>
            <p>I'm a web developer with a passion for creating engaging online experiences. I have a strong command of web development languages and frameworks, specializing in building functional and user-friendly websites.</p>
            <p>Additionally, I bring a unique blend of skills that extends to web design, print design, and silk-screen printing, allowing me to deliver compelling designs across both digital and physical mediums.</p>
            <p>Let's connect and discuss how I can assist you in bringing your digital projects to life!</p>
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ContentLinkBox title='Playground' description='My digital portfolio of experiments with web technologies.' href='/playground' />
          <ContentLinkBox title='CV' description='Feel free to check out what I did in the past.' href='/cv' />
          <ContentLinkBox title='Contact' description='Please contact me via email if there’s anything I could help you with.' href='mailto:web@hendrikwichern.de' />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
