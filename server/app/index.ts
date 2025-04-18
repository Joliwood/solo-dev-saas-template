import { createServer } from 'http';
import * as process from 'process';

import { createSchema, createYoga } from 'graphql-yoga';
import { useGraphQlJit } from '@envelop/graphql-jit';

import allSchemas from './schemas/schemas';
import ServerDbDatasource from './datasources/serverDb.datasource';

import { Mutation, Query, User } from '#resolvers-server';
import { type customTypes } from '#types-server';
import { db } from '#utils-server';

const allResolvers = { Mutation, Query, User };

const yoga = createYoga<customTypes.GraphQLContext>({
  schema: createSchema<customTypes.GraphQLContext>({
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
  plugins: [useGraphQlJit()],
});

const server = createServer(yoga);

const port = process.env.SERVER_PORT ?? 5030;
const baseUrl = process.env.PG_HOST ?? 'localhost';

server.listen(port, () => {
  // eslint-disable-next-line no-undef
  console.info(`Server is running on http://${baseUrl}:${port}/graphql`);
});
