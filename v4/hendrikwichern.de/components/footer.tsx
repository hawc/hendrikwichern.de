import { Box, Container } from "./box";
import { Link } from "./link";

export function Footer() {
  return (
    <footer>
      <Container>
        <Box>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="mb-2 md:mb-0">
              <span>hendrikwichern.de</span>
            </div>
            <div className="flex gap-5 justify-between font-semibold">
              <Link href='https://github.com/hawc'>
                GitHub
              </Link>
              <Link href='https://codepen.io/hawcubite'>
                Codepen.io
              </Link>
              <Link href='https://www.linkedin.com/in/hendrik-wichern/'>
                LinkedIn
              </Link>
              <Link href='https://www.xing.com/profile/Hendrik_Wichern'>
                Xing
              </Link>
            </div>
          </div>
        </Box>
      </Container>
    </footer>
  );
}