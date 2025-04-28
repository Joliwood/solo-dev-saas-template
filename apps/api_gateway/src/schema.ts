import { stitchSchemas } from "@graphql-tools/stitch";
import { loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";
import { WrapType } from "@graphql-tools/wrap";
import { GraphQLSchema } from "graphql";

export async function createStitchedSchema(): Promise<GraphQLSchema> {
  // Load each subschema from its remote endpoint
  const psql_server_schema = await loadSchema("http://localhost:5030/graphql", {
    loaders: [new UrlLoader()],
  });

  const mongo_server = await loadSchema("http://localhost:5031/graphql", {
    loaders: [new UrlLoader()],
  });

  // Stitch together, namespacing each root Query under its own field
  return stitchSchemas({
    subschemas: [
      {
        schema: psql_server_schema,
        transforms: [new WrapType("Query", "PsqlQueries", "psql")],
      },
      {
        schema: mongo_server,
        transforms: [new WrapType("Query", "MongoQueries", "mongo")],
      },
    ],
  });
}
