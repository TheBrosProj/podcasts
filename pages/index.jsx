import NavBar from '../components/navbar';
import Player from '../components/player';
import SearchBar from '../components/search';
import { useState, useEffect } from 'react';
import { Recommended, TopPicks } from '../components/customcards';
import Footer from '../components/footer';
import { useAuth } from '../lib/useAuth';
import { ChakraProvider, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
  const [activeId, SetActiveId] = useState(0);
  useEffect(() => {
    console.log(activeId);
  },[activeId]);
  // console.log(useAuth().authUser);
  return (
    <ChakraProvider>
      <main>
        <title>Podcasts</title>
        <NavBar></NavBar>
        <SearchBar/>
        <TopPicks active={SetActiveId} ></TopPicks>
        <Text align={'center'}><Link href={'/upload'}>Temporary Upload Link</Link></Text>
        <Recommended active={SetActiveId} userId={"UID"}></Recommended>
        {/* <LibreVox></LibreVox> */}
        <Footer></Footer>
        <Player active={activeId}></Player>
      </main>
    </ChakraProvider>
  )
}
