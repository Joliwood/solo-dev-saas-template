import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import dotenv from "dotenv";

import allSchemas from "./schemas/schemas";

import { Context } from "#types_mongo_server";
import { connectToDatabase } from "#utils_mongo_server";
import { Query, UserMongo } from "#resolvers_mongo_server";

dotenv.config();

const { MONGO_URI: mongoUri, MONGO_DB: mongoDb } = process.env;
if (!mongoUri || !mongoDb) throw new Error("Missing MongoDB env vars");

async function main() {
  const db = await connectToDatabase(mongoUri!, mongoDb!);
  console.log("✅ MongoDB connected to", db.databaseName);

  const yoga = createYoga<Context>({
    schema: createSchema<Context>({
      typeDefs: allSchemas,
      resolvers: { UserMongo, Query },
    }),
    context: () => ({ db }),
  });

  const server = createServer(yoga);
  server.listen(5031, () => {
    console.info("🚀 Server running at http://localhost:5031/graphql");
  });
}

main().catch((err) => {
  console.error("❌ Error starting server:", err);
  process.exit(1);
});
