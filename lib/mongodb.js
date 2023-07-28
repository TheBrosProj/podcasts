// import { MongoClient } from 'mongodb';

// const client = new MongoClient(process.env.MONGODB_URI);

// export async function connectToDatabase() {
// //   if (!client.isConnected()) {
//     await client.connect();
// //   }
//   return client.db(process.env.MONGODB_DB); // Replace 'myDatabase' with your MongoDB database name
// }

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

export async function connectToDatabase() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  const db = await client.db(dbName);
  return db;
}
