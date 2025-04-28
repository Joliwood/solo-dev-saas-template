// src/index.ts
import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import dotenv from "dotenv";

import { connectToDatabase } from "./utils";
import { User, Query } from "./resolvers";
import allSchemas from "./schemas/schemas";

dotenv.config();

const { MONGO_URI: mongoUri, MONGO_DB: mongoDb } = process.env;
if (!mongoUri || !mongoDb) throw new Error("Missing MongoDB env vars");

async function main() {
  // 1️⃣ Connexion à Mongo **avant** Yoga
  const db = await connectToDatabase(mongoUri!, mongoDb!);
  console.log("✅ MongoDB connecté à", db.databaseName);

  // 2️⃣ Création du serveur GraphQL
  const yoga = createYoga<{
    db: import("mongodb").Db;
  }>({
    schema: createSchema({
      typeDefs: allSchemas,
      resolvers: { User, Query },
    }),
    // On passe l’instance `db` (pas une Promise)
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
