import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSearch } from '@/components/SearchContext';
import CardShowcase from '@/components/cards';
import { Center, Heading, Text } from '@chakra-ui/react';
import SearchBar from '@/components/search';
import axios from 'axios';

const SearchResultsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const handleGetPodcast = async (id) => {
    // if (!id) return;
    const response = await axios.post('/api/searchPodcasts', { searchTerm: id });
    console.log(response.data[0]);
  };
  handleGetPodcast(slug);

  return (
    <>
    {slug}
    <SearchBar></SearchBar>
    </>
  );
};

export default SearchResultsPage;
