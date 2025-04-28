import { MongoClient, Db } from "mongodb";

let cachedClient: MongoClient;
let cachedDb: Db;

/**
 * Connecte (ou récupère) un client MongoDB unique et renvoie la Db
 */
export async function connectToDatabase(
  uri: string,
  dbName: string
): Promise<Db> {
  if (!uri || !dbName) {
    throw new Error("MongoDB URI and database name are required");
  }

  if (cachedDb) return cachedDb;

  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(uri, {
        maxPoolSize: 10,
        connectTimeoutMS: 10000,
      });
      await cachedClient.connect();
      console.log("✅ MongoDB connected");
    }

    cachedDb = cachedClient.db(dbName);
    return cachedDb;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}
