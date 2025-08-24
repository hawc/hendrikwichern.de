import { PropsWithChildren } from 'react';
import { Box } from './box';
import { Container } from './container';
import { Link } from './link';

export function Header({ children }: PropsWithChildren) {
  return (
    <header>
      <Container>
        <Box>
          <div className='flex justify-between'>
            <div className='flex flex-col md:flex-row'>
              <div className='inline-block font-bold'>
                <Link href={'/'}>Hendrik Wichern</Link>
              </div>
              <div className='md:ml-3 inline-block italic'>Product Engineer</div>
            </div>
            {children && (
              <div className='print:hidden'>
                {children}
              </div>
            )}
          </div>
        </Box>
      </Container>
    </header>
  );
}