import { Box, Container } from "./box";
import { Link } from "./link";

export function Header({ children }: { children?: React.ReactElement[] | React.ReactElement | string }) {
  return (
    <header>
      <Container>
        <Box>
          <div className="flex justify-between">
            <div>
              <div className="inline-block font-bold">
                <Link href={'/'}>Hendrik Wichern</Link>
              </div>
              <div className="ml-3 inline-block italic">Web Developer</div>
            </div>
            {children ?? (
              <div>
                {children}
              </div>
            )}
          </div>
        </Box>
      </Container>
    </header>
  );
}