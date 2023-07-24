import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NavBar from '../components/navbar';
import Player from '../components/player';
import SearchBar from '../components/search';
import { Recommended, TopPicks, LibreVox } from '../components/customcards';
import { Files, searchByName, getAudio } from '../lib/db';
import Footer from '../components/footer';
import { useAuth } from '../lib/useAuth';

export default function Home() {
  const [activeId, setActiveId] = useState(0);
  const [audio, setAudio] = useState(0);
  console.log(useAuth().authUser);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Files();
      // if (data[0] && typeof data[0].audio.base64 === 'string') {
      //   setAudio(getAudio(data[0].audio));
      // } else {
      //   // Handle invalid data
      // }
    };
    fetchData();
  }, []);

  return (
    <Box>
      <Flex direction="column" minHeight="100vh">
        <NavBar />
        <SearchBar onSearch={console.log} />
        <TopPicks active={setActiveId} />
        <Recommended active={setActiveId} userId={"UID"} />
        {/* <LibreVox /> */}
        <Footer />
      </Flex>
      <Player audio={{ audio }} />
    </Box>
  );
}
