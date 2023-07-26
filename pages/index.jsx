import NavBar from '../components/navbar';
import Player from '../components/player';
import SearchBar from '../components/search';
import { useState,useEffect } from 'react';
import {Recommended, TopPicks , LibreVox} from '../components/customcards';
import { Files,searchByName,getAudio } from '../lib/db'
import Footer from '../components/footer';
import { useAuth } from '../lib/useAuth';

export default function Home() {
  const [activeId,SetActiveId] = useState(0);
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
    <main>
      <title>Podcasts</title>
      <NavBar></NavBar>
      <SearchBar onSearch={console.log} />
      <TopPicks  active={SetActiveId} ></TopPicks>
      <Recommended active={SetActiveId} userId={"UID"}></Recommended>
      {/* <LibreVox></LibreVox> */}
      <Footer></Footer>
      <Player audio={{audio}}></Player>
    </main>
  )
}
