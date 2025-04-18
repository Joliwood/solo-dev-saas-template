import { stitchSchemas } from '@graphql-tools/stitch';
import { loadSchema } from '@graphql-tools/load';
import { UrlLoader } from '@graphql-tools/url-loader';
import { GraphQLSchema } from 'graphql';

export async function createStitchedSchema(): Promise<GraphQLSchema> {
  const server_1_schema = await loadSchema('http://localhost:5030/graphql', {
    loaders: [new UrlLoader()],
  });

  const hello_world_schema = await loadSchema('http://localhost:5031/graphql', {
    loaders: [new UrlLoader()],
  });

  return stitchSchemas({
    subschemas: [server_1_schema, hello_world_schema],
  });
}
