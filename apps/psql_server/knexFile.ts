/* eslint-disable turbo/no-undeclared-env-vars */
import * as process from 'process';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const knexConfig = {
  local: {
    client: 'pg',
    connection: {
      user: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      port: Number(process.env.PG_PORT),
      host: process.env.PG_HOST,
      ssl: false,
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },

  development: {
    client: 'pg',
    connection: {
      user: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      port: Number(process.env.PG_PORT),
      host: process.env.PG_HOST,
      ssl: true,
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },

  production: {
    client: 'pg',
    connection: {
      user: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      port: Number(process.env.PG_PORT),
      host: process.env.PG_HOST,
      ssl: true,
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },
};

export default knexConfig;
