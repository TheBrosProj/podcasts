import NavBar from '@/components/navbar';
import SearchBar from '@/components/search';
import { Recommended, TopPicks } from '@/components/customcards';
import Footer from '@/components/footer';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
  // console.log(useAuth().authUser);
  return (
      <main>
        <title>Podcasts</title>
        <NavBar></NavBar>
        <SearchBar autoFocus={false}/>
        <TopPicks></TopPicks>
        <Text align={'center'}><Link href={'/upload'}>Temporary Upload Link</Link></Text>
        <Recommended userId={"UID"}></Recommended>
        {/* <LibreVox></LibreVox> */}
        <Footer></Footer>
      </main>
  )
}
