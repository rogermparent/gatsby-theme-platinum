// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { Heading } from "@theme-ui/components"
import { Link, useStaticQuery, graphql } from "gatsby"

const SiteHeader = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <header
      sx={{
        bg: "primary",
        color: "background",
        fontSize: 1,
        textAlign: 'center',
      }}
      id="header"
    >
      <Container sx={{
        py: 2,
        px: [2, null, 4],
        display: 'flex',
        flexDirection: ['column', null, 'row'],
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link
          to='/'
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            flex: '1 0 auto',
          }}
        ><Heading>{title}</Heading></Link>
        <p sx={{flex: '0 1 auto'}}>Shadow this header in <code>src/gatsby-theme-platinum/components/header.js</code>!</p>
      </Container>
    </header>
  )
}

export default SiteHeader
