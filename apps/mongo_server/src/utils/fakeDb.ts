import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";

let mongoServer: MongoMemoryServer;
let client: MongoClient;

export async function startFakeDb() {
  mongoServer = await MongoMemoryServer.create();
  client = new MongoClient(mongoServer.getUri());
  await client.connect();
  // Seed rapide
  const db = client.db("test");
  await db.collection("users").insertMany([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ]);
  return client;
}

export async function stopFakeDb() {
  await client.close();
  await mongoServer.stop();
}
