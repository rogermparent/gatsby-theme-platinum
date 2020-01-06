import React from "react"
import { Styled } from "theme-ui"
import { Flex } from "@theme-ui/components"
import StyleReset from "../utils/normalize-css"

const BaseLayout = ({ children, className }) => (
  <Styled.root>
    <StyleReset />
    <Flex
      sx={{
        minWidth: "minPageWidth",
        flexFlow: "column nowrap",
        minHeight: "100vh",
        "@media print": {
          a: {
            color: "inherit !important",
          },
        },
      }}
      className={className}
    >
      {children}
    </Flex>
  </Styled.root>
)

export default BaseLayout
