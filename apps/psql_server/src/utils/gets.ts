import { type Knex } from 'knex';

import { type schema } from '#types-server';

export function getFilterQuery(
  query: Knex.QueryBuilder,
  filter: schema.InputMaybe<schema.UserFilterInput> | undefined
) {
  const { name: filterByName } = filter || {};

  if (filterByName) {
    return query.whereILike('name', `${filterByName}%`);
  }

  return null;
}
