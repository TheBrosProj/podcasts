// pages/search/[slug].jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSearch } from '@/components/SearchContext'; // Update the path
import SearchBar from '@/components/search';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

const SearchResultsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { searchResults, loading, setSearchTerm } = useSearch();

  useEffect(() => {
    // Set the search term in the SearchContext when the slug changes
    setSearchTerm(slug);
  }, [slug]);

  return (
    <>
    <NavBar></NavBar>
    <SearchBar></SearchBar>
    <Footer></Footer>
    </>
  );
};

export default SearchResultsPage;
