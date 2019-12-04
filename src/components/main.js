/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteMain = props => {
  return (
    <main
      sx={{
        flex: "1 1 auto",
        width: "100%",
        mt: 3,
        mb: 4,
        mx: 0,
        px: 0,
        variant: "variants.main",
      }}
    >
      {props.children}
    </main>
  )
}

export default SiteMain
