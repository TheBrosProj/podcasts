import { useState } from 'react';
import {firebase} from '../lib/firebase';
import 'firebase/firestore';
import 'firebase/storage';
import axios from 'axios';

async function sendData(data) {
  const response = await axios.post('http://localhost:3000/myRoute', data);
  const responseData = response.data;
  // ...
}

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [artist, setArtist] = useState('');
  const [podcast, setPodcast] = useState(null);
  const [id, setId] = useState("");
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const data = {title,artist,image:imageUrl,description}
    const response = await axios.post('http://localhost:5000/add', data);
    console.log(response);
  };

  const handleGetPodcast = async () => {
    if (!id) return;

    // Get podcast information from Firestore (Need to change this to mongodb server)
    const docRef = firebase.firestore().collection('podcasts').doc(id);
    const doc = await docRef.get();
    if (doc.exists) {
      setPodcast(doc.data());
    }
  };

  return (
    <div>
      <h1>Upload Podcast</h1>
      <input type="text" placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
      <input type="text" placeholder="Description" onChange={(event) => setDescription(event.target.value)} />
      <input type="text" placeholder="Artist" onChange={(event) => setArtist(event.target.value)} />
      <input type="text" placeholder="ImageUrl" onChange={(event) => setImageUrl(event.target.value)} />
      <input type="file" accept="audio/mp4" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <progress value={progress} max="100" />
      <h2>Get Podcast</h2>
      <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
      <button onClick={handleGetPodcast}>Get Podcast</button>
      {podcast && (
        <div>
          <h3>{podcast.title}</h3>
          <p>{podcast.description}</p>
          <p>{podcast.artist}</p>
          <audio controls src={podcast.url} />
        </div>
      )}
    </div>
  );
}