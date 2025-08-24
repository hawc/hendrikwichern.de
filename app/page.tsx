import { Box } from '@/components/box';
import { Container } from '@/components/container';
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
            <p>Welcome to my personal website and portfolio. I'm Hendrik, a product engineer focused on building digital experiences.</p>
            <p>I build full-stack web applications with a focus on performance and user experience. My work spans the entire development process,
              from concept to deployment, and I enjoy tackling complex technical challenges. 
              I have experience leading teams and integrating emerging technologies like AI into web platforms.</p>
            <p>Looking to collaborate? I'm open to discussing new projects and opportunities. Get in touch if you'd like to work together.</p>
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
