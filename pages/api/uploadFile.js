import { GridFSBucket } from 'mongodb';
import multer from 'multer';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const client = new MongoClient(uri, { useUnifiedTopology: true });
  const db = client.db(dbName);
  const bucket = new GridFSBucket(db);

  upload.single('file')(req, {}, async (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    const { file, body: metadata } = req;

    const uploadStream = bucket.openUploadStream(file.originalname, { metadata });

    uploadStream.end(file.buffer);
    uploadStream.on('error', (err) => {
      res.status(500).json({ error: err.message });
    });
    uploadStream.on('finish', () => {
      res.status(200).json({ message: 'File uploaded successfully' });
    });
  });
}
