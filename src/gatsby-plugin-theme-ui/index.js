import { darken } from "@theme-ui/color"

export default {
  breakpoints: ["480px", "768px", "1024px", "1440px"],
  colors: {
    primary: "#3273dc",
    secondary: "#0c66a1",
    muted: "#f5f5f5",
    grey: "#767676",
    text: "#333333",
    textWhite: "#ffffff",
    background: "#ffffff",

    header: {
      background: "#cccccc",
      backgroundOpen: "#333333",
      text: "#333333",
      textOpen: "#ffffff",
      icons: "#333333",
      iconsHover: "#3273dc",
      iconsOpen: "#ffffff",
    },

    footer: {
      background: "#333333",
      text: "#ffffff",
      links: "#ffffff",
      icons: "#ffffff",
    },
  },
  fonts: {
    text:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: "inherit",
    monospace: "Menlo, monospace",
    siteTitle: "inherit", // Font for main site title
    navLinks: "inherit", // Font for the nav menu links
    alt: "inherit",
  },
  fontSizes: [
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.5rem",
    "3rem",
  ],
  fontWeights: {
    text: "400",
    heading: "700",
    bold: "700",
  },
  lineHeights: {
    text: "1.5",
    heading: "1.125",
  },
  spaces: ["0rem", "0.5rem", "1rem", "1.5rem", "2rem", "2.5rem", "3rem"],
  sizes: {
    minPageWidth: "300px", // Used as the min-width for body
    maxContentWidth: "720px", // Used as the max-width for containers
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
    },
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "text",
      fontWeight: "text",
      lineHeight: "text",
      fontSize: [3, 2],
    },
    a: {
      color: "primary", //Sets the default link color
      fontSize: [3, 2],
      transition: "color 0.3s ease 0s",
      ":hover": {
        color: "secondary",
      },
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 2,
      fontSize: [5, 6],
      mt: 3,
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 2,
      fontSize: [4, 5],
      mt: 3,
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 2,
      fontSize: [3, 4],
      mt: 3,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 2,
      fontSize: [2, 3],
    },
    h5: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 2,
    },
    h6: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 2,
      fontSize: 1,
    },
    hr: {
      bg: "grey",
      border: 0,
      height: "2px",
      m: 3,
    },
    blockquote: {
      bg: "muted",
      px: [2, 2, 3],
      py: [1, 2, 3],
      mx: [1, 1, 2],
      my: [2, 2, 3],
      borderLeft: "5px solid",
      borderColor: "primary",
    },
    inlineCode: {
      fontFamily: "monospace",
      backgroundColor: "muted",
      p: 1,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      bg: "muted",
      p: 3,
      border: "1px solid",
      borderColor: "grey",
      borderRadius: "0.25rem",
      code: {
        color: "inherit",
        p: 0,
      },
    },
    ol: {
      pl: [3, 4],
    },
    ul: {
      pl: [3, 4],
    },
    invert: {
      backgroundColor: "primary",
      color: "textWhite",
    },
    invertLink: {
      color: "textWhite",
      ":visited": {
        color: darken("textWhite", 0.2),
      },
    },
    NavLink: {
      variant: "styles.invertLink",
      fontSize: [3, null, 2],
      minHeight: ["48px", 0],
      p: 2,
    },
    TextLogoLink: {
      fontSize: [4, null, 3],
      minHeight: "48px",
      padding: [1],
    },
    Container: {
      py: 0,
      px: 3,
      maxWidth: "maxContentWidth",
    },
  },
  variants: {
    buttons: {
      primary: {
        backgroundColor: "primary",
        color: "textWhite",
        mt: 3,
        mb: 3,
      },
      secondary: {
        backgroundColor: "secondary",
        color: "textWhite",
        mt: 3,
        mb: 3,
      },
      large: {
        backgroundColor: "primary",
        color: "textWhite",
        textTransform: "uppercase",
        fontSize: 4,
        px: 4,
        py: 3,
        mt: 3,
        mb: 3,
      },
      small: {
        backgroundColor: "primary",
        color: "textWhite",
        fontSize: 2,
        mt: 2,
        mb: 2,
      },
    },
  },
}
