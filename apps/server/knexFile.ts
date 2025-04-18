/* eslint-disable turbo/no-undeclared-env-vars */
import * as process from 'process';
import dotenv from 'dotenv';
import { dirname } from 'path';

dotenv.config();

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
      port: Number(process.env.PG_PORT),
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
      port: Number(process.env.PG_PORT),
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
