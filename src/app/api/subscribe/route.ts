import { NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import { MongoClient } from "mongodb";

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
});

const MAILGUN_LIST = process.env.MAILGUN_MAILING_LIST || "";
const MONGODB_URI = process.env.MONGODB_URI || "";

interface Subscriber {
  email: string;
  subscribedAt: Date;
  active: boolean;
}

let cachedClient: MongoClient | null = null;

async function getMongoClient() {
  if (cachedClient) {
    return cachedClient;
  }
  
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }

    // Check if MAILGUN_API_KEY is configured
    if (!process.env.MAILGUN_API_KEY || !MAILGUN_LIST) {
      console.warn("Mailgun not configured, skipping Mailgun subscription");
    } else {
      try {
        const members = await (mg.lists.members as any).listMembers(MAILGUN_LIST);
        const exists = members.items?.some((m: any) => m.address === email);
        if (exists) {
          return NextResponse.json(
            { message: "You are already subscribed." },
            { status: 200 }
          );
        }
      } catch (err: any) {
        console.error("Error checking member:", err);
      }

      try {
        await (mg.lists.members as any).createMember(MAILGUN_LIST, {
          address: email,
          subscribed: true,
        });
      } catch (mailgunError: any) {
        console.error("Mailgun Error:", mailgunError.message || mailgunError);
      }
    }

    // Store in MongoDB
    try {
      const client = await getMongoClient();
      const db = client.db("blog");
      const subscribersCollection = db.collection<Subscriber>("subscribers");

      const existingSubscriber = await subscribersCollection.findOne({ email });
      
      if (!existingSubscriber) {
        const subscriber: Subscriber = {
          email,
          subscribedAt: new Date(),
          active: true,
        };
        await subscribersCollection.insertOne(subscriber);
      } else if (!existingSubscriber.active) {
        // Reactivate if previously unsubscribed
        await subscribersCollection.updateOne(
          { email },
          { $set: { active: true, subscribedAt: new Date() } }
        );
      }
    } catch (mongoError: any) {
      console.error("MongoDB Error:", mongoError.message || mongoError);
      return NextResponse.json(
        { message: "Failed to save subscription. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "You have been subscribed!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Subscribe Error:", error.message || error);
    return NextResponse.json(
      { message: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
