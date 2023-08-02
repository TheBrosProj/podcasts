import '@/styles/globals.css'
import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { SearchProvider } from '@/components/SearchContext'
import { AudioPlayerProvider } from '@/components/AudioPlayerContext'
import NavBar from '@/components/navbar';
import Player from '@/components/player';
import Footer from '@/components/footer';
import { mode } from '@chakra-ui/theme-tools';
import { AuthProvider } from '../components/AuthContext';

const theme = extendTheme(
  {
    styles: {
      global: (props) => ({
        body: {
          fontFamily: 'body',
          color: mode('white', 'white')(props),
          bg: mode('black', 'black')(props),
          lineHeight: 'base',
        },
      }),
    },
  },
  withDefaultColorScheme({
    colorScheme: 'customScheme',
    components: ['Button'],
    light: {
      bg: 'black',
      color: 'white',
    },
    dark: {
      bg: 'black',
      color: 'white',
    },
  })
);

export default function App({ Component, pageProps }) {

  // const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <AudioPlayerProvider>
            <SearchProvider>
              <NavBar />
              <Component {...pageProps} />
              <Footer />
            </SearchProvider>
            <Player></Player>
          </AudioPlayerProvider>
        </AuthProvider>
      </ChakraProvider>
    </>
  )
}
