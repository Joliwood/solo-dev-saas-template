import { type Knex } from 'knex';
import { fakerFR } from '@faker-js/faker';

export async function seed(knex: Knex): Promise<void> {
  const users = [];

  for (let i = 0; i < 500; i += 1) {
    users.push({
      email: fakerFR.internet.email(),
      name: fakerFR.person.fullName(),
      password: fakerFR.internet.password(),
      picture: fakerFR.image.avatar(),
      created_at: new Date(),
    });
  }

  await knex('user').insert(users);
}
