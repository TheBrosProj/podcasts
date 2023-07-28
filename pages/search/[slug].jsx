import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSearch } from '@/components/SearchContext';
import CardShowcase from '@/components/cards';
import { Center, Heading, Text } from '@chakra-ui/react';
import SearchBar from '@/components/search';

const SearchResultsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { searchResults, loading, setSearchTerm } = useSearch();

  useEffect(() => {
    setSearchTerm(slug);
  }, [slug]);

  return (
    <>
    <SearchBar></SearchBar>
    </>
  );
};

export default SearchResultsPage;
