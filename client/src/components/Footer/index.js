import React from "react";
import { Container } from "semantic-ui-react";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container>
      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    </Container>
  );
}

export default Footer;
