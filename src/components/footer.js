// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container } from "@theme-ui/components"

const SiteFooter = () => {
  return (
    <footer
      sx={{
        variant: "styles.invert",
        textAlign: "center",
        fontSize: 1,
      }}
      id="footer"
    >
      <Container
        sx={{
          p: 1,
        }}
      >
        <p>
          Shadow this footer in{" "}
          <code>src/gatsby-theme-platinum/components/footer.js</code>!
        </p>
      </Container>
    </footer>
  )
}

export default SiteFooter
