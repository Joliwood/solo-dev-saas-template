import { type Knex } from 'knex';

import { type InputMaybe, type UserFilterInput } from 'types/__generated__/graphql';

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
