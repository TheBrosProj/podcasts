import NavBar from '../components/navbar';
import Player from '../components/player';
import {Recommended, TopPicks} from '../components/customcards';
import SearchBar from '../components/search'
import Footer from '../components/footer';

const handleSearch = (searchTerm) => {
  alert("searched for "+searchTerm)
};

export default function Home() {
  return (
    <main>
      <title>Podcasts</title>
      <NavBar></NavBar>
      <SearchBar onSearch={handleSearch} />
      <TopPicks></TopPicks>
      <Recommended userId={"1234"}></Recommended>
      <Footer></Footer>
      <Player></Player>
    </main>
  )
}
