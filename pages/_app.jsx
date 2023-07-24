import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "gray.800")(props),
      },
    }),
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}