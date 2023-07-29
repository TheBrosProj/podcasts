import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { SearchProvider } from '@/components/SearchContext'
import { AudioPlayerProvider } from '@/components/AudioPlayerContext'
import NavBar from '../components/navbar';
import Player from '@/components/player';
import Footer from '@/components/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <AudioPlayerProvider>
          <SearchProvider>
              <NavBar />
              <Component {...pageProps} />
              <Footer />
          </SearchProvider>
          <Player></Player>
        </AudioPlayerProvider>
      </ChakraProvider>
    </>
  )
}
