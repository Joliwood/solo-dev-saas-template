import { getPostgresConnectionUrl } from './gets';

const connectionUrl = getPostgresConnectionUrl();

const client = {
  client: 'pg',
  connection: connectionUrl,
};

export default client;
