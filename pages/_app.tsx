import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AudioPlayerProvider } from '@/components/AudioPlayerContext'
import { SearchProvider } from '@/components/SearchContext'
import Player from '@/components/player';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <AudioPlayerProvider>
          <SearchProvider>
          <Component {...pageProps} />
          </SearchProvider>
          <Player></Player>
        </AudioPlayerProvider>
      </ChakraProvider>
    </>
  )
}
