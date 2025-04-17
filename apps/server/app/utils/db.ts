import knex, { type Knex } from 'knex';
import dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

const {
  PG_SSL_OPTION,
  PG_DATABASE,
  PG_PORT,
  PG_HOST,
  PG_PASSWORD,
  PG_USER,
} = process.env;

const knexConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: PG_HOST,
    port: PG_PORT ? parseInt(PG_PORT, 10) : undefined,
    database: PG_DATABASE,
    user: PG_USER,
    password: PG_PASSWORD,
    ssl: PG_SSL_OPTION === 'true',
  },
};

const db = knex(knexConfig);

export default db;
