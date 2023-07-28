import { MongoClient } from 'mongodb';
const mongodb = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const fileId = req.query.fileId;

  try {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    const db = client.db(dbName);

    const bucket = new mongodb.GridFSBucket(db);

    const downloadStream = bucket.openDownloadStream(new mongodb.ObjectId(fileId));

    downloadStream.on('error', (error) => {
      console.error('Error retrieving audio:', error);
      return res.status(500).json({ error: 'Something went wrong' });
    });

    res.setHeader('Content-Type', 'audio/mpeg'); // Set the appropriate content type for your audio file
    downloadStream.pipe(res);

  } catch (error) {
    console.error('MongoDB connection error:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
