import CardShowcase from './cards';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

var items = [
  {
    _id: 1,
    title: 'Card 1', aName: 'TheBrosProj Team',
    img: 'https://picsum.photos/200',
    desc: 'This is the first card',
  },
  {
    _id: 2,
    title: 'Card 2', aName: 'TheBrosProj Team',
    img: 'https://picsum.photos/200',
    desc: 'This is the second card',
  },
  {
    _id: 3,
    title: 'Card 3',
    img: 'https://picsum.photos/200',
    desc: 'This is the first card',
  },
  {
    _id: 4,
    title: 'Card 4',
    img: 'https://picsum.photos/200',
    desc: 'This is the second card',
  }, {
    _id: 5,
    title: 'Card 5',
    img: 'https://picsum.photos/200',
    desc: 'This is the first card',
  },
  {
    _id: 6,
    title: 'Card 6',
    img: 'https://picsum.photos/200',
    desc: 'This is the second card',
  }, {
    _id: 7,
    title: 'Card 7',
    img: 'https://picsum.photos/200',
    desc: 'This is the first card',
  },
  {
    _id: 8,
    title: 'Card 8',
    img: 'https://picsum.photos/200',
    desc: 'This is the second card',
  }, {
    _id: 9,
    title: 'Card 9',
    img: 'https://picsum.photos/200',
    desc: 'This is the first card',
  },
  {
    _id: 10,
    title: 'Card 10',
    img: 'https://picsum.photos/200',
    desc: 'This is the second card',
  },
  {
    _id: 11,
    title: 'Card 11',
    img: 'https://picsum.photos/200',
    desc: 'This is the first card',
  },
  {
    _id: 12,
    title: 'Card 12',
    img: 'https://picsum.photos/200',
    desc: 'This is the second card',
  }, {
    _id: 13,
    title: 'Card 13',
    img: 'https://picsum.photos/200',
    desc: 'This is the first card',
  },
  {
    _id: 14,
    title: 'Card 14',
    img: 'https://picsum.photos/200',
    desc: 'This is the second card',
  }, {
    _id: 15,
    title: 'Card 15',
    img: 'https://picsum.photos/200',
    desc: 'This is the first card',
  },
];

export const Recommended = ({ userId }) => {
  const [data, setData] = useState(items);

  useEffect(() => {
    // Fetch data here if needed
  }, []);

  return (
    <Box>
      <Heading textAlign="center" as="h1" size="xl" mt={"4"}>
        Recommended
      </Heading>
      <CardShowcase items={data} col={3} />
    </Box>
  );
};

export const TopPicks = ({ active }) => {
  return (
    <Box>
      <Heading textAlign="center" as="h1" size="xl" mt={'4'}>
        Top Picks
      </Heading>
      <CardShowcase items={items} col={3} />
    </Box>
  );
};

export const LibreVox = () => {
  const [libreData, setLibreData] = useState(items);

  useEffect(() => {
    fetch('https://librivox.org/api/feed/audiobooks?since=0&extended=1&limit=5&format=json')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.books.map(book => ({
          _id: book.id,
          name: book.title,
          desc: book.description,
          aName: book.authors[0].first_name + ' ' + book.authors[0].last_name,
          img: book.url_image,
        }));
        setLibreData(formattedData);
      });
  }, []);

  return (
    <Box>
      <Heading textAlign="center" as="h1" size="xl">
        LibreVox Hits
      </Heading>
      <CardShowcase items={libreData} col={3} />
    </Box>
  );
};