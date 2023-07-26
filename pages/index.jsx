import NavBar from '../components/navbar';
import Player from '../components/player';
import SearchBar from '../components/search';
import { useState, useEffect } from 'react';
import { Recommended, TopPicks } from '../components/customcards';
import Footer from '../components/footer';
import { useAuth } from '../lib/useAuth';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  const [activeId, SetActiveId] = useState(0);
  console.log(useAuth().authUser);
  return (
    <ChakraProvider>
      <main>
        <title>Podcasts</title>
        <NavBar></NavBar>
        <SearchBar/>
        <TopPicks active={SetActiveId} ></TopPicks>
        <Recommended active={SetActiveId} userId={"UID"}></Recommended>
        {/* <LibreVox></LibreVox> */}
        {/* <Footer></Footer>
        <Player></Player> */}
      </main>
    </ChakraProvider>
  )
}
