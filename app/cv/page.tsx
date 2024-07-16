import { Box, Container } from '@/components/box';
import { Headline } from '@/components/headline';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TagList } from '@/components/tags';
import { List, ListItem } from '@/components/list';
import { Link } from '@/components/link';

export const metadata = {
  robots: 'noindex, nofollow',
}

export default function Page() {
  return (
    <div className='grid gap-2px' style={{ '--highlight': 'var(--highlight-magenta)' } as React.CSSProperties}>
      <Header>
        <div className='font-semibold'>
          <Link href='/'>Home</Link>
        </div>
      </Header>
      <main className='grid gap-2px'>
        <Container>
          <Box highlighted className='py-0'>
            <Headline type='h1' className='print:text-4xl'>CV</Headline>
          </Box>
        </Container>
        <Container>
          <Box>
            <p>Hey there! I specialize in building TypeScript-based web applications. My primary focus is on creating robust and user-centered websites. I am well-versed in utilizing frameworks like React.js and Vue.js, along with Node.js and APIs based on REST or GraphQL – running on platforms like AWS or Netlify.</p>
            <p>In addition to my technical proficiency, I have a strong understanding of UX (User Experience) principles and web performance. I prioritize creating seamless and intuitive experiences for end users while ensuring the application's efficiency.</p>
            <p>I am always eager to explore new technologies and incorporate them into existing development stacks or create from-the-scratch online experiences. I enjoy working in agile teams, mentoring other developers and continuously improving the team's development processes.</p>
          </Box>
        </Container>
        <Container>
          <Box className='print:pb-0'>
            <Headline tag='h2' type='h3'>Professional Experience</Headline>
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 md:grid-cols-1-3 print:grid-cols-1-3'>
          <Box dashed>
            <Headline tag='h3' type='h4'>
              Quantilope, Hamburg
            </Headline>
            <div className='italic'>
              since 01/2024
            </div>
          </Box>
          <Box>
            <Headline tag='h4' type='h4'>
              Senior Frontend Engineer
            </Headline>
            <List>
              <ListItem>Fullstack rewrite of web-based research platform with focus on performance and coding standards</ListItem>
              <ListItem isNested>
                <List>
                  <ListItem>Implementation of new features</ListItem>
                  <ListItem>Integration of AI technologies</ListItem>
                  <ListItem>Optimization and benchmarking of web performance</ListItem>
                  <ListItem>Implementation of CI/CD processes</ListItem>
                  <ListItem>Enhancing observability</ListItem>
                  <ListItem>Extending the component library</ListItem>
                </List>
              </ListItem>
              <ListItem>Maintenance of legacy applications</ListItem>
              <ListItem isNested>
                <List>
                  <ListItem>Infrastructure optimization (AWS)</ListItem>
                  <ListItem>Enhancing user experience</ListItem>
                  <ListItem>Providing technical documentation</ListItem>
                </List>
              </ListItem>
              <ListItem>Mentoring</ListItem>
            </List>
            <TagList className='mt-1 flex-grow' tagNames={['TypeScript', 'React', 'GraphQL', 'MongoDB', 'AWS', 'Meteor.js', 'Storybook', 'CI/CD']} />
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 md:grid-cols-1-3 print:grid-cols-1-3'>
          <Box dashed>
            <Headline tag='h3' type='h4'>
              Accenture Song, Hamburg
            </Headline>
            <div className='italic'>
              01/2023 - 12/2023
            </div>
          </Box>
          <Box>
            <Headline tag='h4' type='h4'>
              Senior Product Engineer
            </Headline>
            <List>
              <ListItem>Maintenance and extension of micro-frontend website; frontend, backend and infrastructure (IaC), in close contact with client</ListItem>
              <ListItem isNested>
                <List>
                  <ListItem>Performance optimization</ListItem>
                  <ListItem>CI/CD enhancement</ListItem>
                </List>
              </ListItem>
              <ListItem>Mentoring</ListItem>
            </List>
            <TagList className='mt-1 flex-grow' tagNames={['TypeScript', 'React', 'GraphQL', 'AWS', 'Contentful', 'Styled Components', 'CI/CD']} />
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 md:grid-cols-1-3 print:grid-cols-1-3'>
          <Box dashed>
            <Headline tag='h3' type='h4'>
              Statista, Hamburg
            </Headline>
            <div className='italic'>
              01/2022 - 12/2022
            </div>
          </Box>
          <Box>
            <Headline tag='h4' type='h4'>
              Team Lead & Tech Lead
            </Headline>
            <List>
              <ListItem>Leadership of development team for ecommerce analytics platform</ListItem>
              <ListItem isPlus>same as below</ListItem>
            </List>
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 md:grid-cols-1-3 print:grid-cols-1-3'>
          <Box dashed>
            <Headline tag='h3' type='h4'>
              Statista, Hamburg
            </Headline>
            <div className='italic'>
              05/2021 - 12/2021
            </div>
          </Box>
          <Box>
            <Headline tag='h4' type='h4'>
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
              <ListItem>Mentoring</ListItem>
              <ListItem>Maintenance of legacy PHP application</ListItem>
            </List>
            <TagList className='mt-1 flex-grow' tagNames={['TypeScript', 'Vue.js', 'Nuxt.js', 'Docker', 'AWS', 'Terraform', 'PHP', 'Laravel']} />
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 md:grid-cols-1-3 print:grid-cols-1-3'>
          <Box dashed>
            <Headline tag='h3' type='h4'>
              Statista, Hamburg
            </Headline>
            <div className='italic'>
              10/2017 - 04/2021
            </div>
          </Box>
          <Box>
            <Headline tag='h4' type='h4'>
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
          </Box>
        </Container>
        <Container cols='grid-cols-m-2 grid-cols-1 md:grid-cols-1-3 print:grid-cols-1-3'>
          <Box dashed>
            <Headline tag='h3' type='h4'>
              cadooz, Hamburg
            </Headline>
            <div className='italic'>
              09/2014 - 08/2017
            </div>
          </Box>
          <Box>
            <Headline tag='h4' type='h4'>
              Frontend Web Developer
            </Headline>
            <List>
              <ListItem>Frontend rewrite of ecommerce shops and SaaS tools</ListItem>
              <ListItem>Maintenance and template updates on CMS-based websites</ListItem>
              <ListItem>Search engine optimization</ListItem>
            </List>
            <TagList className='mt-1 flex-grow' tagNames={['JavaScript', 'jQuery', 'Velocity (for Java)', 'Bootstrap', 'Typo3', 'ezPublish']} />
          </Box>
        </Container>
        <Container>
          <Box className='print:pb-0'>
            <Headline tag='h2' type='h3'>Technical Skills</Headline>
          </Box>
        </Container>
        <Container cols='grid-cols-1'>
          <Box>
            <Headline tag='h4' type='h4'>Key Skills</Headline>
            <TagList className='mb-2' tagNames={['TypeScript', 'React', 'Next.js', 'GraphQL', 'Node.js', 'UI/UX', 'Web Performance']} />
            <Headline tag='h4' type='h4'>Also worked with</Headline>
            <TagList className='mb-2' tagNames={['Vue.js', 'Nuxt.js', 'Svelte', 'Sveltekit', 'MongoDB', 'PostgresQL', 'Highcharts.js', 'Three.js', 'p5.js', 'Tailwind', 'Styled Components', 'D3.js', 'Jest', 'Playwright', 'Strorybook', 'Terraform', 'nginx', 'jQuery', 'WebGL', 'PHP', 'Java', 'MySQL', 'Symfony', 'Typo3', 'ezPublish']} />
            <Headline tag='h4' type='h4'>Tools</Headline>
            <TagList className='mb-2' tagNames={['AWS · CloudFormation, IAM, Lambda, S3', 'Git', 'Shell', 'BrowserStack', 'DigitalOcean', 'Netlify', 'Vercel', 'Keycloak', 'Contentful', 'Cloudinary', 'Docker', 'Webpagetest.org', 'Google Analytics', 'Google Search Console', 'Figma', 'Sketch', 'Photoshop', 'Illustrator', 'Doodle Jump']} />
            <Headline tag='h4' type='h4'>Further Professional Skills</Headline>
            <TagList className='mb-2' tagNames={['Team Leadership', 'Accessibility & Usability', 'Pagespeed & SEO Optimization', 'Maintainability & Extendability', 'Scrum', 'Graphic Design', 'English (fluent)', 'Korean (basics)']} />
          </Box>
        </Container>
        <Container>
          <Box className='print:pb-0'>
            <Headline tag='h2' type='h3'>Personal Interests</Headline>
          </Box>
        </Container>
        <Container cols='grid-cols-1'>
          <Box>
            <div>Creative Coding</div>
            <div>Print Design</div>
            <div>Screen Printing</div>
            <div>Traveling</div>
            <div>Analogue Photography</div>
          </Box>
        </Container>
        <Container className='hidden print:flex'>
          <Box className='print:pb-0'>
            <Headline tag='h2' type='h3'>Online Profiles</Headline>
          </Box>
        </Container>
        <Container className='hidden print:flex' cols='grid-cols-1'>
          <Box>
            <div>Website: https://hendrikwichern.de</div>
            <div>GitHub: https://github.com/hawc</div>
            <div>Codepen.io: https://codepen.io/hawcubite</div>
            <div>LinkedIn: https://www.linkedin.com/in/hendrik-wichern/</div>
            <div>Xing: https://www.xing.com/profile/Hendrik_Wichern/</div>
          </Box>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
