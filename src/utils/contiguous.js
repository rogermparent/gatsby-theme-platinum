/** @jsx jsx */
import { jsx, Container } from "theme-ui"

export const applyOnContiguousMatches = (rawChildren, test, cb) => {
  const currentGroup = []
  const result = []

  const children = Array.isArray(rawChildren) ? rawChildren : [rawChildren]

  for (const child of children) {
    if (test(child) === true) {
      currentGroup.push(child)
    } else {
      if (currentGroup.length > 0) {
        /*
           If the current child doesn't pass the test and there is currently a
           group of passing items, add the result of the callback applied on
           a copy of that group, then clear the group.
         */
        result.push(cb(currentGroup.slice()))
        currentGroup.length = 0
      }
      // Add the non-passing child directly to the result, ungrouped.
      result.push(child)
    }
  }

  // Process the last group if the last child passed.
  if (currentGroup.length > 0) {
    result.push(cb(currentGroup))
  }

  return result
}

export const ContainContiguous = ({ children }) => {
  let lastKey = 1
  return applyOnContiguousMatches(
    children,
    child => child.props.fullWidth !== "true",
    matches => (
      <Container key={`contained-group-${lastKey++}`}>{matches}</Container>
    )
  )
}
