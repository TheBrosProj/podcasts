import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm !== '') {
      setLoading(true);
      // axios
      //   .post('/api/searchPodcasts', { searchTerm })
      //   .then((response) => {
      //     setSearchResults(
      //       response.data.map((result) => ({
      //         _id: result._id.toString(),
      //         title: result.metadata.title,
      //         desc: result.metadata.description,
      //         aName: result.metadata.artist,
      //         img: result.metadata.image,
      //       }))
      //     );
      //   })
      //   .finally(() => setLoading(false));
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchResults, loading }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);

export { SearchProvider, useSearch };
