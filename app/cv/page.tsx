import { Box, Container } from '@/components/box';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Headline } from '@/components/headline';
import { Link } from '@/components/link';
import { List, ListItem } from '@/components/list';
import { TagList } from '@/components/tags';

export const metadata = {
  robots: 'noindex, nofollow',
};

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
            <p>Hey there! I specialize in building TypeScript-based web applications. My primary focus is on creating robust and user-centered websites. I am well-versed in utilizing frameworks like React.js and Vue.js, along with Node.js and APIs based on REST or GraphQL – running on infrastructure provided by AWS, DigitalOcean or Netlify.</p>
            <p>I've also worked with Azure AI services, leveraging OpenAI models to bring intelligent, language-driven features into web applications.</p>
            <p>In addition to my technical proficiency, I have a strong understanding of UX (User Experience) principles and web performance. I prioritize creating seamless and intuitive experiences for end users while ensuring the application's efficiency.</p>
            <p>My work is informed by solid design fundamentals, and I'm comfortable collaborating with designers and working directly in tools like Figma to bridge the gap between design and development.</p>
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
              <ListItem>
                Full-stack rewrite of a web-based research platform with emphasis on performance, scalability, and long-term maintainability
              </ListItem>
              <ListItem isNested>
                <List>
                  <ListItem>Integrated AI-driven features into core workflows</ListItem>
                  <ListItem>Developed new features through iterative design, user interviews, and feedback integration</ListItem>
                  <ListItem>Conducted web performance benchmarking and optimization</ListItem>
                  <ListItem>Expanded and maintained component library for UI consistency and reusability</ListItem>
                  <ListItem>Established comprehensive testing strategy including unit, component, and end-to-end tests</ListItem>
                  <ListItem>Implemented robust CI/CD pipelines to streamline deployments</ListItem>
                  <ListItem>Led Scrum ceremonies such as backlog refinement and sprint planning, and closely supported the product manager in aligning technical delivery with product goals</ListItem>
                </List>
              </ListItem>
              <ListItem>Maintained and improved legacy applications to ensure stability and performance</ListItem>
              <ListItem isNested>
                <List>
                  <ListItem>Improved user experience across existing interfaces</ListItem>
                  <ListItem>Optimized cloud infrastructure on AWS for cost and performance</ListItem>
                </List>
              </ListItem>
              <ListItem>Provided mentorship to junior engineers</ListItem>
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
              <ListItem>
                Maintained and extended a micro-frontend automotive platform across frontend, backend, and infrastructure (IaC)
              </ListItem>
              <ListItem isNested>
                <List>
                  <ListItem>Close collaboration with the client to align technical solutions with business needs</ListItem>
                  <ListItem>Improved application performance through targeted optimizations</ListItem>
                  <ListItem>Enhanced CI/CD pipelines for faster, more reliable deployments</ListItem>
                </List>
              </ListItem>
              <ListItem>Provided mentorship and technical guidance to team members</ListItem>
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
              <ListItem>Leadership of development team for e-commerce analytics platform</ListItem>
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
              <ListItem>Project scoping and roadmap planning to align technical goals with business priorities</ListItem>
              <ListItem>Led development of an e-commerce analytics platform:</ListItem>
              <ListItem isNested>
                <List>
                  <ListItem>Designed full-stack architecture for a comprehensive platform rewrite</ListItem>
                  <ListItem>Drove frontend redevelopment to modernize user experience and codebase</ListItem>
                </List>
              </ListItem>
              <ListItem>Provided mentorship and technical leadership to team members</ListItem>
              <ListItem>Maintained and stabilized legacy PHP application during transition phase</ListItem>
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
              <ListItem>Analyzed and optimized page performance for improved load times and Core Web Vitals</ListItem>
              <ListItem>Rewrote and modernized market outlook pages for better maintainability and performance</ListItem>
              <ListItem>Improved usability and accessibility to enhance user experience and meet WCAG standards</ListItem>
              <ListItem>Implemented SEO best practices to improve search visibility and organic reach</ListItem>
              <ListItem>Refactored legacy jQuery codebase using vanilla JavaScript and Vue.js</ListItem>
              <ListItem>Redesigned and built marketing pages in alignment with updated brand and UX guidelines</ListItem>
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
              <ListItem>Led frontend rewrites of e-commerce storefronts and SaaS platforms to improve performance, maintainability, and user experience</ListItem>
              <ListItem>Maintained and updated CMS-based websites, including custom template development and integration</ListItem>
              <ListItem>Applied SEO best practices to enhance site visibility and search rankings</ListItem>
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
            <TagList className='mb-2' tagNames={['Vue.js', 'Nuxt.js', 'Svelte', 'Sveltekit', 'MongoDB', 'PostgreSQL', 'Highcharts.js', 'Three.js', 'Tailwind', 'D3.js', 'Jest', 'Playwright', 'Storybook', 'Terraform', 'PHP', 'MySQL']} />
            <Headline tag='h4' type='h4'>Tools</Headline>
            <TagList className='mb-2' tagNames={['AWS · CloudFormation, IAM, Lambda, S3', 'JIRA', 'Netlify', 'Vercel', 'Contentful', 'Docker', 'Figma', 'Photoshop', 'Illustrator', 'Doodle Jump']} />
            <Headline tag='h4' type='h4'>Further Professional Skills</Headline>
            <TagList className='mb-2' tagNames={['Team Leadership', 'Accessibility & Usability', 'Pagespeed & SEO Optimization', 'Maintainability & Extendability', 'Scrum', 'Graphic & Web Design', 'English (fluent)', 'Korean (basics)']} />
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
          </Box>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
