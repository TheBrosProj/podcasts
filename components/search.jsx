import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Box, InputGroup, Input, InputRightElement, IconButton, Center, Heading, Text } from '@chakra-ui/react';
import { useSearch } from './SearchContext';
import CardShowcase from './cards';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const { searchTerm, setSearchTerm, searchResults, loading } = useSearch();
  const router = useRouter();
  const handleSearch = (value) => {
    setSearchTerm(value);
    if(value != ""){
    router.push(value);
  }
  else{
    router.push("/")
  }
  }

  return (
    <>
      <Center ml={'4'}>
        <Box position="relative" width="lg" mt="4" mr="4">
          <form>
            <InputGroup>
              <Input
                autoFocus={true}
                type="text"
                placeholder="Search for podcasts"
                value={searchTerm}
                onChange={(event) => handleSearch(event.target.value)}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  type="submit"
                  h="1.75rem"
                  size="sm"
                  aria-label="Search"
                  background={'transparent'}
                  icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                />
              </InputRightElement>
            </InputGroup>
          </form>
        </Box>
      </Center>
      {searchTerm !== '' && (
        <Box>
          <Heading textAlign="center" as="h1" size="xl" mt={'4'}>
            Search Results
          </Heading>
          {loading ? (
            <Center h={'md'}>
              <Text fontSize={'lg'}>Loading...</Text>
            </Center>
          ) : searchResults.length !== 0 ? (
            <CardShowcase items={searchResults} col={3} />
          ) : (
            <Center h={'md'}>
              <Text fontSize={'lg'}>No Results Found</Text>
            </Center>
          )}
        </Box>
      )}
    </>
  );
};

export default SearchBar;
