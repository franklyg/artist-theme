/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'

const GridItem = ({ children, columnsAmount  }) => {
  return(
    <section
      sx={{
        display: 'grid',
        gridTemplateColumns: `${ columnsAmount }`,
        fontSize: 1,
        alignItems: 'center'
      }}
    >
      {children}
    </section>
  )
}

export default GridItem;