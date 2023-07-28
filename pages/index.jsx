import SearchBar from '@/components/search';
import { Recommended, TopPicks } from '@/components/customcards';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
  return (
      <main >
        <title>Podcasts</title>
        <Box>
        <SearchBar autoFocus={false}/>
        <TopPicks></TopPicks>
        <Text align={'center'}><Link href={'/upload'}>Temporary Upload Link</Link></Text>
        <Recommended userId={"UID"}></Recommended>
        {/* <LibreVox></LibreVox> */}
        </Box>
      </main>
  )
}
