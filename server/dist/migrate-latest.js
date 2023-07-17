import knex from 'knex';
import config from '../knexfile.js';

const knexDb = knex(config);
await knexDb.migrate.latest({ directory: './migrations' });
await knexDb.destroy();
