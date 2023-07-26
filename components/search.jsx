import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Box, InputGroup, Input, InputRightElement, IconButton, Center, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import CardShowcase from './cards';

const SearchBar = ({ active }) => {
  const [searchTerm, SetSearchTerm] = useState("")
  const [searchResults, SetSearchResults] = useState([])
  let data = []
  const handleSearch = async (value) => {
    const response = await axios.post('/api/searchPodcasts', { searchTerm: value });
    data = response.data
    SetSearchResults(data.map(result => ({
      _id: result._id,
      title: result.title,
      desc: result.description,
      aName: result.artist,
      img: result.image,
    })));
  }


  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);


  return (
    <>
      <Center ml={'4'}>
        <Box position="relative" width="lg" mt="4" mr="4">
          <form>
            <InputGroup>
              <Input
                type="text"
                placeholder="Search for podcasts"
                value={searchTerm}
                onChange={(event) => SetSearchTerm(event.target.value)}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  type="submit"
                  aria-label="Search"
                  icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                />
              </InputRightElement>
            </InputGroup>
          </form>
        </Box>
      </Center>
      {searchTerm !== "" &&
        <Box>
          <Heading textAlign="center" as="h1" size="xl" mt={'4'}>
            Search Results
          </Heading>
          {searchResults.length !== 0 ?
          <CardShowcase items={searchResults} col={3} />
          : <Center h={'md'}><Text fontSize={'lg'}>No Results Found</Text></Center>  
        }
        </Box>
      }
    </>
  );
};

export default SearchBar;
