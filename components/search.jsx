import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqQ140AoimlkJT-_MlyKWTDSAo2bhATRY",
  authDomain: "softskills-puzzle.firebaseapp.com",
  databaseURL: "https://softskills-puzzle-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "softskills-puzzle",
  storageBucket: "softskills-puzzle.appspot.com",
  messagingSenderId: "975338090757",
  appId: "1:975338090757:web:52f97f79f417c85f48c76c",
  measurementId: "G-9E332KQK57"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();

    // search for audio files that match the search term
    const querySnapshot = await firebase.firestore().collection('audioFiles')
      .where('title', '>=', searchTerm)
      .where('title', '<=', searchTerm + '\uf8ff')
      .get();

    // extract the audio files from the query snapshot
    const audioFiles = querySnapshot.docs.map((doc) => doc.data());

    onSearch(audioFiles);
  };

  return (
    <form onSubmit={handleSearch} className='search'>
      <input
        type="text"
        placeholder="Search for podcasts"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchBar;