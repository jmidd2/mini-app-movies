import express from 'express';
import db from '../db.js';

const router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', async (req, res, next) => {
  const movies = await db('movies').select();
  res.send(movies);
});

export default router;
