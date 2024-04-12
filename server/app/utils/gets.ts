import { type Knex } from 'knex';

import { type InputMaybe, type UserFilterInput } from 'types/__generated__/graphql';

export function getPostgresConnectionUrl() {
  const {
    PG_SSL_OPTION,
    PG_DATABASE,
    PG_PORT,
    PG_HOST,
    PG_PASSWORD,
    PG_USER,
  } = process.env;

  const sslConfig = PG_SSL_OPTION === 'true' ? '?ssl=true' : '';
  const connectionUrl = `postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}${sslConfig}`;

  return connectionUrl;
}

export function getFilterQuery(
  query: Knex.QueryBuilder,
  filter: InputMaybe<UserFilterInput> | undefined,
) {
  const { name: filterByName } = filter || {};

  if (filterByName) {
    return query.whereILike('name', `${filterByName}%`);
  }

  return null;
}
