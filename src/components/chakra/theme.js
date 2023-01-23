import { extendTheme } from '@chakra-ui/react'
import "@fontsource/inter/800.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/900.css"

const theme = extendTheme({
  fonts: {
    heading: `'General Sans', sans-serif`,
    body: "'General Sans', sans-serif"
  },
})

export default theme