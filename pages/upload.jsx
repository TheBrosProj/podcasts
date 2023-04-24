import { useState } from 'react';
import {firebase} from '../lib/firebase';
import 'firebase/firestore';
import 'firebase/storage';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [artist, setArtist] = useState('');
  const [podcast, setPodcast] = useState(null);
  const [id, setId] = useState("");
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    // Upload file to Firebase Storage
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    const uploadTask = fileRef.put(file);

    // Update progress
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        // Get download URL
        const downloadUrl = await fileRef.getDownloadURL();

        // Save podcast information to Firestore
        const docRef = await firebase.firestore().collection('podcasts').add({
          title,
          description,
          artist,
          url: downloadUrl
        });

        setId(docRef.id);
      }
    );
  };

  const handleGetPodcast = async () => {
    if (!id) return;

    // Get podcast information from Firestore
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