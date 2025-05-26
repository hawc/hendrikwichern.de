import { Box, Container } from '@/components/box';
import { ContentLinkBox } from '@/components/contentModules';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Headline } from '@/components/headline';

export default function Page() {
  return (
    <div className='grid gap-2px' style={{ '--highlight': 'var(--highlight-teal)' } as React.CSSProperties}>
      <Header />
      <main className='grid gap-2px'>
        <Container>
          <Box highlighted>
            <Headline type='h1'>Hi there!</Headline>
          </Box>
        </Container>
        <Container>
          <Box>
            <p>Welcome! This is my personal website and portfolio. I'm Hendrik, a web developer passionate about creating engaging digital experiences.</p>
            <p>I specialize in building functional and user-friendly websites, combining my expertise in web development with design skills. With strong proficiency in modern JavaScript frameworks, responsive design, and performance optimization, I create seamless digital experiences. My background spans both digital and physical mediums, including print design and silk-screen printing, allowing me to deliver compelling solutions across different platforms.</p>
            <p>Interested in working together? I'm always excited to discuss new projects and opportunities. Feel free to reach out!</p>
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ContentLinkBox title='Projects' description='A collection of my personal web projects and experiments.' href='/projects' />
          <ContentLinkBox title='CV' description='My professional background and experience.' href='/cv' />
          <ContentLinkBox title='Contact' description='Get in touch at web@hendrikwichern.de' href='mailto:web@hendrikwichern.de' />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
