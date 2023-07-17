/**
 * @param { import("knex").Knex } knex
 */
export async function up(knex) {
  return knex.schema.alterTable('movies', table => {
    table.boolean('user_created').defaultTo(false);
    table.boolean('watched').defaultTo(false);
  });
}

/**
 * @param { import("knex").Knex } knex
 */
export async function down(knex) {
  return knex.schema.alterTable('movies', table => {
    table.dropColumns('user_created', 'watched');
  });
}
