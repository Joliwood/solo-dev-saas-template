import { createServer } from 'node:http';

import { createYoga } from 'graphql-yoga';
import dotenv from 'dotenv';

import { schema } from './utils/createSchema';

dotenv.config();

const yoga = createYoga({ schema });

const server = createServer(yoga);
const port = process.env.SERVER_PORT;
const baseUrl = process.env.PG_HOST;

server.listen(port, () => {
  console.info(`Server is running on http://${baseUrl}:${port}/graphql`);
});
