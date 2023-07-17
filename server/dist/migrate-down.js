import knex from 'knex';
import config from '../knexfile.js';

const db = knex(config);
await db.migrate.down();
await db.destroy();
