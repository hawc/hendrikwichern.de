import { Box, Container } from '@/components/box';
import { Headline } from '@/components/headline';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TagList } from '@/components/tags';
import { List, ListItem } from '@/components/list';
import { Link } from '@/components/link';
import { MotionBox } from '../motion';

export const metadata = {
  robots: 'noindex, nofollow',
}

export default function Page() {
  return (
    <div className='grid gap-2px' style={{ "--highlight": 'var(--highlight-magenta)' } as React.CSSProperties}>
      <Header>
        <div className='font-semibold'>
          <Link href="/">Home</Link>
        </div>
      </Header>
      <main className='grid gap-2px'>
        <Container>
          <Box highlighted>
            <Headline type='h1'>CV</Headline>
          </Box>
        </Container>
        <Container>
          <MotionBox>
            <p>I specialize in building TypeScript-based web applications. My primary focus is on creating robust and user-centered websites. I am well-versed in utilizing frameworks like Vue.js and React, along with Node.js and APIs based on REST or GraphQL – running on platforms like AWS and Netlify.</p>
            <p>In addition to my technical proficiency, I also have a strong understanding of UX (User Experience) principles and performance optimization. I prioritize creating seamless and intuitive experiences for website visitors while ensuring the application's efficiency and speed.</p>
            <p>I am always eager to explore new technologies and experienced in incorporating them into existing development stacks. I enjoy working in development teams, empowering them to leverage these innovative tools in their daily work.</p>
          </MotionBox>
        </Container>
        <Container>
          <MotionBox>
            <Headline tag="h2" type='h3'>Professional Experience</Headline>
          </MotionBox>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 md:grid-cols-1-3'>
          <MotionBox dashed>
            <Headline tag="h3" type='h4'>
              Accenture Song, Hamburg
            </Headline>
            <div className='italic'>
              01/2023 - present
            </div>
          </MotionBox>
          <MotionBox>
            <Headline tag="h4" type='h4'>
              Senior Product Engineer
            </Headline>
            <List>
              <ListItem>Maintenance and development of micro-frontend website; frontend, backend and infrastructure</ListItem>
            </List>
            <TagList className='mt-1 flex-grow' tagNames={['TypeScript', 'React', 'GraphQL', 'Styled Components', 'AWS']} />
          </MotionBox>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 md:grid-cols-1-3'>
          <MotionBox dashed>
            <Headline tag="h3" type='h4'>
              Statista, Hamburg
            </Headline>
            <div className='italic'>
              01/2022 - 12/2022
            </div>
          </MotionBox>
          <MotionBox>
            <Headline tag="h4" type='h4'>
              Team Lead & Tech Lead
            </Headline>
            <List>
              <ListItem>Leadership of development team for ecommerce analytics platform</ListItem>
              <ListItem isPlus>same as below</ListItem>
            </List>
          </MotionBox>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 md:grid-cols-1-3'>
          <MotionBox dashed>
            <Headline tag="h3" type='h4'>
              Statista, Hamburg
            </Headline>
            <div className='italic'>
              05/2021 - 12/2021
            </div>
          </MotionBox>
          <MotionBox>
            <Headline tag="h4" type='h4'>
              Tech Lead
            </Headline>
            <List>
              <ListItem>Project scoping & roadmap planning</ListItem>
              <ListItem>Work on ecommerce analytics platform:</ListItem>
              <ListItem isNested>
                <List>
                  <ListItem>Architectural conception for full stack rewrite</ListItem>
                  <ListItem>Frontend rewrite</ListItem>
                </List>
              </ListItem>
              <ListItem>Maintenance of legacy application</ListItem>
            </List>
            <TagList className='mt-1 flex-grow' tagNames={['TypeScript', 'Vue.js', 'Nuxt.js', 'Docker', 'AWS', 'Terraform', 'Node.js', 'Rest APIs']} />
          </MotionBox>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 md:grid-cols-1-3'>
          <MotionBox dashed>
            <Headline tag="h3" type='h4'>
              Statista, Hamburg
            </Headline>
            <div className='italic'>
              10/2017 - 04/2021
            </div>
          </MotionBox>
          <MotionBox>
            <Headline tag="h4" type='h4'>
              Frontend Web Developer
            </Headline>
            <List>
              <ListItem>Pagespeed performace analysis, optimization and maintenance</ListItem>
              <ListItem>Rewrite of market outlook pages</ListItem>
              <ListItem>Usability and accessibility optimization</ListItem>
              <ListItem>Search engine optimization</ListItem>
              <ListItem>Rewrite of jQuery codebase in vanilla JavaScript and Vue.js</ListItem>
              <ListItem>Redesign and implementation of various marketing pages</ListItem>
            </List>
            <TagList className='mt-1 flex-grow' tagNames={['JavaScript', 'Vue.js', 'Highcharts.js', 'Webpack', 'HTML', 'CSS', 'Twig', 'Symfony']} />
          </MotionBox>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 md:grid-cols-1-3'>
          <MotionBox dashed>
            <Headline tag="h3" type='h4'>
              cadooz, Hamburg
            </Headline>
            <div className='italic'>
              09/2014 - 08/2017
            </div>
          </MotionBox>
          <MotionBox>
            <Headline tag="h4" type='h4'>
              Frontend Web Developer
            </Headline>
            <List>
              <ListItem>Frontend rewrite of ecommerce shops and SaaS tools</ListItem>
              <ListItem>Maintenance and template updates on CMS-based websites</ListItem>
              <ListItem>Search engine optimization</ListItem>
            </List>
            <TagList className='mt-1 flex-grow' tagNames={['JavaScript', 'jQuery', 'Velocity (for Java)', 'Bootstrap', 'Typo3', 'ezPublish']} />
          </MotionBox>
        </Container>
        <Container>
          <MotionBox>
            <Headline tag="h2" type='h3'>Technical Skills</Headline>
          </MotionBox>
        </Container>
        <Container cols='grid-cols-1'>
          <MotionBox>
            <Headline tag="h4" type='h4'>Key Skills</Headline>
            <TagList className="mb-2" tagNames={['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Web Design', 'HTML', 'CSS', 'SVG', 'Twig', 'Blade']} />
            <Headline tag="h4" type='h4'>Also worked with</Headline>
            <TagList className="mb-2" tagNames={['GraphQL', 'Node.js', 'Webpack', 'Highcharts.js', 'Three.js', 'p5.js', 'Tailwind CSS', 'D3.js', 'Keycloak API', 'Contentful API', 'Jest', 'AWS: CloudFormation, CloudFront, IAM, Lambda, S3', 'Terraform', 'Docker', 'nginx', 'jQuery', 'Bootstrap', 'WebGL', 'PHP', 'Java', 'MySQL', 'Symfony', 'Typo3', 'ezPublish']} />
            <Headline tag="h4" type='h4'>Tools</Headline>
            <TagList className="mb-2" tagNames={['Git', 'Shell', 'BrowserStack', 'DigitalOcean', 'Netlify', 'Webpagetest.org', 'Google Analytics', 'Google Search Console', 'Figma', 'Sketch', 'Photoshop', 'Illustrator', 'IntelliJ', 'VS Code', 'Doodle Jump']} />
            <Headline tag="h4" type='h4'>Further Professional Skills</Headline>
            <TagList className="mb-2" tagNames={['Team Leadership', 'Accessibility & Usability', 'Pagespeed & SEO Optimization', 'Scrum', 'Graphic Design', 'English (fluent)', 'Korean (basics)']} />
          </MotionBox>
        </Container>
        <Container>
          <MotionBox>
            <Headline tag="h2" type='h3'>Personal Interests</Headline>
          </MotionBox>
        </Container>
        <Container cols='grid-cols-1'>
          <MotionBox>
            <div>Creative Coding</div>
            <div>Print Design</div>
            <div>Screen Printing</div>
            <div>Traveling</div>
            <div>Analogue Photography</div>
          </MotionBox>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
