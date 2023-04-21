import NavBar from '../components/navbar';
import Player from '../components/player';
import Recommended from '../components/reccomended';
import SearchBar from '../components/search'

const handleSearch = (searchTerm) => {
  alert("searched for "+searchTerm)
};

export default function Home() {
  return (
    <main>
      <title>Podcasts</title>
      <NavBar></NavBar>
      <SearchBar onSearch={handleSearch} />
      <Recommended></Recommended>
      <Player></Player>
    </main>
  )
}
