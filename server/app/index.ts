import { createServer } from 'http';

import { createSchema, createYoga } from 'graphql-yoga';
import dotenv from 'dotenv';

import allResolvers from './resolvers/resolvers';
import allSchemas from './schemas/schemas';
import ServerDbDatasource from './datasources/serverDb.datasource';

import { type GraphQLContext } from '#types';

dotenv.config();

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
          knexConfig: {
            client: 'pg',
            connection: {
              user: process.env.PG_USER,
              database: process.env.PG_DATABASE,
              password: process.env.PG_PASSWORD,
              port: process.env.PG_PORT,
              host: process.env.PG_HOST,
              ssl: process.env.PG_SSL_OPTION === 'true',
            },
          },
        }),
      },
      // Provide here other tiers data sources if needed
    };
  },
});

const server = createServer(yoga);

const port = process.env.SERVER_PORT;
const baseUrl = process.env.PG_HOST;

server.listen(port, () => {
  console.info(`Server is running on http://${baseUrl}:${port}/graphql`);
});
