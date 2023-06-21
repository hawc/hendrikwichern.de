import Link from "next/link";
import { Box, Container } from "./box";

export function Header({ children }: { children?: React.ReactElement[] | React.ReactElement | string }) {
  return (
    <header>
      <Container>
        <Box>
          <div className="flex justify-between">
            <div>
              <Link className="inline-block font-bold" href={'/'}>Hendrik Wichern</Link>
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