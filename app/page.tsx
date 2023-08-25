import { Box, Container } from '@/components/box';
import { Headline } from '@/components/headline';
import { ContentLinkBox } from '@/components/contentModules';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <div className='grid gap-2px' style={{ "--highlight": 'var(--highlight-teal)' } as React.CSSProperties}>
      <Header />
      <main className='grid gap-2px'>
        <Container>
          <Box highlighted>
            <Headline type='h1'>Hi there!</Headline>
          </Box>
        </Container>
        <Container>
          <Box>
            <p>Nice to meet you! If you're not sure how you got here: This is my, Hendrik's, website and online portfolio.</p>
            <p>I'm a web developer with a passion for creating engaging online experiences. I have a strong command of web development languages and frameworks, specializing in building functional and user-friendly websites.
              I bring a blend of skills around web development and design, print design, and silk-screen printing, allowing me to deliver compelling designs across both digital and physical mediums.</p>
            <p>Let's connect and discuss how I can assist you in bringing your digital projects to life.</p>
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ContentLinkBox title='Projects' description='Some of my personal web projects. Mostly experiments with web technologies and frameworks.' href='/projects' />
          <ContentLinkBox title='CV' description='Feel free to check out what I did in the past.' href='/cv' />
          <ContentLinkBox title='Contact' description='Please reach out via email if you want to get to know me further.' href='mailto:web@hendrikwichern.de' />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
