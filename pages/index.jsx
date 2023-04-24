import NavBar from '../components/navbar';
import Player from '../components/player';
import { useState } from 'react';
import {Recommended, TopPicks} from '../components/customcards';
import SearchBar from '../components/search'
import Footer from '../components/footer';
import {auth} from '../lib/firebase'
const handleSearch = (searchTerm) => {
  searchTerm
};

export default function Home() {
  const [UID,setUID] = useState(null);
  if(auth.currentUser){
    if(auth.currentUser){
      setUID(auth.currentUser.uid)
    }
  }
  return (
    <main>
      <title>Podcasts</title>
      <NavBar></NavBar>
      <SearchBar onSearch={handleSearch} />
      <TopPicks></TopPicks>
      <Recommended userId={UID}></Recommended>
      <Footer></Footer>
      <Player></Player>
    </main>
  )
}
