import * as path from 'path';

import dotenv from 'dotenv';

dotenv.config();

const dirname = path.dirname(__filename);

const knexConfig = {

  local: {
    client: 'pg',
    connection: {
      user: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
      host: process.env.PG_HOST,
      ssl: false,
    },
    migrations: {
      directory: `${dirname}/db/migrations`,
    },
    seeds: {
      directory: `${dirname}/db/seeds`,
    },
  },

  development: {
    client: 'pg',
    connection: {
      user: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
      host: process.env.PG_HOST,
      ssl: true,
    },
    migrations: {
      directory: `${dirname}/db/migrations`,
    },
    seeds: {
      directory: `${dirname}/db/seeds`,
    },
  },

  production: {
    client: 'pg',
    connection: {
      user: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
      host: process.env.PG_HOST,
      ssl: true,
    },
    migrations: {
      directory: `${dirname}/db/migrations`,
    },
    seeds: {
      directory: `${dirname}/db/seeds`,
    },
  },
};

export default knexConfig;
