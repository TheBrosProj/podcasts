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
import Footer from '@/components/footer';

export default function UploadForm() {
  // const [file, setFile] = useState(null);
  let file = null;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [artist, setArtist] = useState('');
  const [podcast, setPodcast] = useState(null);
  const [id, setId] = useState('');
  const [progress, setProgress] = useState(0);
  const toast = useToast();

  const handleFileChange = async (event) => {
    file = (event.target.files[0]);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title',title);
    formData.append('artist',artist);
    formData.append('image',imageUrl);
    formData.append('description',description);
    const data =  {
      method: 'POST',
      body: formData,
    }
    const response = await fetch('/api/uploadFile',data);
    console.log(response);
  };

  const handleUpload = async () => {
    const data = { title, artist, image: imageUrl, description };
    console.log(data);
    const response = await axios.post('/api/addPodcast', data);
    console.log(response)
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
    // const response = await axios.post('/api/searchPodcasts', { searchTerm: id });
    // console.log(response.data);
    try {
      const response = await fetch(`/api/getFile?fileId=${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);

      audioPlayer.src = objectURL;
      audioPlayer.play();
    } catch (error) {
      console.error('Error loading audio:', error);
      // Handle error, display an error message, etc.
    }

  };

  return (
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
          <Input type="file" accept="audio/mp3" onChange={handleFileChange} />
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
        <audio id="audioPlayer" controls src="" />
        {podcast && (
          <Box>
            {/* <Heading as="h3" mb={2}>
              {podcast.title}
            </Heading>
            <p>{podcast.description}</p>
            <p>{podcast.artist}</p>
            <audio  controls>
              <source src="" type="audio/mpeg">
            </audio> */}
          </Box>
        )}
      </Box>
      <Footer></Footer>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </Center>
  );
}
