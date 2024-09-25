import { createServer } from 'http';

import { createSchema, createYoga } from 'graphql-yoga';
import { useGraphQlJit } from '@envelop/graphql-jit';

import allSchemas from './schemas/schemas';
import ServerDbDatasource from './datasources/serverDb.datasource';

import { Mutation, Query, User } from '#resolvers-server';
import { type GraphQLContext } from '#types-server';
import { db } from '#utils-server';

const allResolvers = { Mutation, Query, User };

const yoga = createYoga<GraphQLContext>({
  schema: createSchema({
    typeDefs: allSchemas,
    resolvers: allResolvers,
  }),
  context: async ({ req }) => {
    return {
      req,
      userEncoded: req.headers.authorization,
      dataSources: {
        serverDbDatasource: new ServerDbDatasource({
          knexConfig: db,
        }),
      },
      // Provide here other tiers data sources if needed
    };
  },
  // WIP - Try to delete this plugin
  // eslint-disable-next-line react-hooks/rules-of-hooks
  plugins: [useGraphQlJit()],
});

const server = createServer(yoga);

const port = process.env.SERVER_PORT;
const baseUrl = process.env.PG_HOST;

server.listen(port, () => {
  console.info(`Server is running on http://${baseUrl}:${port}/graphql`);
});
