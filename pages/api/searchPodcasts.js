import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

export default async function searchPodcasts(req, res) {
  if (req.method === 'POST') {
    const { searchTerm } = req.body;

    // Create a new MongoClient
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Get a reference to the podcast collection
      const db = client.db(dbName);
      const podcastCollection = db.collection('fs.file');

      // Create a regular expression to search for the searchTerm in the title field
      const searchRegex = new RegExp(searchTerm, 'i');

      // Find all podcasts with a title that matches the search term
      const podcasts = await podcastCollection.find({ metadata: {title:searchRegex} }).toArray();

      res.status(200).json(podcasts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while retrieving the podcasts' });
    } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}