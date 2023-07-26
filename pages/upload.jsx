import { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  Progress,
  Center,
  useToast,
  Flex,
  ChakraProvider,
} from '@chakra-ui/react';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [artist, setArtist] = useState('');
  const [podcast, setPodcast] = useState(null);
  const [id, setId] = useState('');
  const [progress, setProgress] = useState(0);
  const toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const data = { title, artist, image: imageUrl, description };
    const response = await axios.post('/api/addPodcast', data);
    console.log(response);
    if(response.status == 200){
    toast({
      title: 'Success',
      description: response.data.message,
      status: 'success',
      duration: 9000,
      isClosable: true,
    });}
    else{
      toast({
        title: 'Error',
        description: response.data.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleGetPodcast = async () => {
    // if (!id) return;
    const response = await axios.post('/api/searchPodcasts', { searchTerm: id });
    console.log(response.data);
  };

  return (
    <ChakraProvider>
    <Center minHeight="100vh">
      <Box width="400px" p={4} borderWidth="1px" borderRadius="lg">
        <Heading as="h1" mb={4}>
          Upload Podcast
        </Heading>
        <FormControl mb={4}>
          <FormLabel>Title</FormLabel>
          <Input type="text" placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Artist</FormLabel>
          <Input type="text" placeholder="Artist" onChange={(event) => setArtist(event.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>ImageUrl</FormLabel>
          <Input type="text" placeholder="ImageUrl" onChange={(event) => setImageUrl(event.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Audio File</FormLabel>
          <Input type="file" accept="audio/mp4" onChange={handleFileChange} />
        </FormControl>
        <Button colorScheme="blue" onClick={handleUpload} mb={4}>
          Upload
        </Button>
        <Progress value={progress} max={100} mb={4} />
        <Heading as="h2" mb={4}>
          Get Podcast
        </Heading>
        <FormControl mb={4}>
          <FormLabel>Podcast ID</FormLabel>
          <Input type="text" value={id} onChange={(event) => setId(event.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleGetPodcast} mb={4}>
          Get Podcast
        </Button>
        {podcast && (
          <Box>
            <Heading as="h3" mb={2}>
              {podcast.title}
            </Heading>
            <p>{podcast.description}</p>
            <p>{podcast.artist}</p>
            <audio controls src={podcast.url} />
          </Box>
        )}
      </Box>
    </Center>
    </ChakraProvider>
  );
}
