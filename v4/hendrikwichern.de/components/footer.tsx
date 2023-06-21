import Link from "next/link";
import { Box, Container } from "./box";

export function Footer() {
  return (
    <footer>
      <Container>
        <Box>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="mb-2 md:mb-0">
              <span>hendrikwichern.de</span>
            </div>
            <div className="flex gap-5 justify-between">
              <Link className="font-semibold" href='https://github.com/hawc' target="_blank">
                GitHub
              </Link>
              <Link className="font-semibold" href='https://codepen.io/hawcubite' target="_blank">
                Codepen.io
              </Link>
              <Link className="font-semibold" href='https://www.linkedin.com/in/hendrik-wichern/' target="_blank">
                LinkedIn
              </Link>
              <Link className="font-semibold" href='https://www.xing.com/profile/Hendrik_Wichern' target="_blank">
                Xing
              </Link>
            </div>
          </div>
        </Box>
      </Container>
    </footer>
  );
}