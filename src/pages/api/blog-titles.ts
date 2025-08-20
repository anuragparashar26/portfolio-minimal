import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = 'blog';
const collectionName = 'posts';

let cachedClient: MongoClient | null = null;

async function getClient() {
  if (cachedClient) return cachedClient;
  if (!uri) throw new Error('MONGODB_URI not set');
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await getClient();
    const db = client.db(dbName);
    const posts = await db.collection(collectionName).find({}, { projection: { _id: 0, title: 1, slug: 1 } }).toArray();
    const postsWithUrl = posts
      .filter((p: any) => p.slug && p.title)
      .map((p: any) => ({
        title: p.title,
        url: `https://blog.anuragparashar.tech/posts/${p.slug}`
      }));
    res.status(200).json({ posts: postsWithUrl });
  } catch (e) {
    res.status(500).json({ posts: [], error: e instanceof Error ? e.message : 'Unknown error' });
  }
}
