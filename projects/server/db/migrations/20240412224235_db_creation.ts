import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('user');
  await knex.schema.createTable('user', (table) => {
    table.increments('id').primary();
    table.text('email').unique();
    table.text('name').notNullable();
    table.text('password').notNullable();
    table.text('picture');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('user');
}
