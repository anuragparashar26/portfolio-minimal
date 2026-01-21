import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

interface ViewStats {
  _id: string;
  totalViews: number;
  lastUpdated: Date;
}

export async function GET() {
  try {
    const client = await getMongoClient();
    const db = client.db("portfolio");
    const statsCollection = db.collection<ViewStats>("viewStats");

    const stats = await statsCollection.findOne({ _id: "portfolio-views" });
    const views = stats?.totalViews || 0;

    return NextResponse.json({ views });
  } catch (error: any) {
    console.error("Error fetching view count:", error);
    return NextResponse.json({ views: 0, error: error.message });
  }
}

export async function POST() {
  try {
    const client = await getMongoClient();
    const db = client.db("portfolio");
    const statsCollection = db.collection<ViewStats>("viewStats");

    const result = await statsCollection.findOneAndUpdate(
      { _id: "portfolio-views" },
      {
        $inc: { totalViews: 1 },
        $set: { lastUpdated: new Date() },
      },
      {
        upsert: true,
        returnDocument: "after",
      }
    );

    const views = result?.totalViews || 1;

    return NextResponse.json({ views, incremented: true });
  } catch (error: any) {
    console.error("Error incrementing view count:", error);
    return NextResponse.json({ views: 0, error: error.message }, { status: 500 });
  }
}
