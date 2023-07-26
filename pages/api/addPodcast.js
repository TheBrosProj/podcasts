import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, artist, image, description } = req.body;

    // Create a new MongoClient
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Get a reference to the podcast collection
      const db = client.db(dbName);
      const podcastCollection = db.collection('metadata');

      // Insert the podcast data into the collection
      const result = await podcastCollection.insertOne({ title, artist, image, description });

      res.status(200).json({ message: 'podcast uploaded successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while saving the podcast data' });
    } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
