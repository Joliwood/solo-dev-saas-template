import { createServer } from 'node:http';

import { createYoga } from 'graphql-yoga';

import { schema } from './utils/createSchema';

const yoga = createYoga({ schema });

const server = createServer(yoga);
const port = process.env.PGPORT;
const baseUrl = process.env.PG_HOST;

server.listen(port, () => {
  console.info(`Server is running on http://${baseUrl}:${port}/graphql`);
});
