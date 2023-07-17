import express from 'express';
import db from '../db.js';

const router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', async (req, res, next) => {
  const movies = await db('movies').select();
  res.json(movies);
});

router.post('/', async (req, res, next) => {
  const newTitle = decodeURIComponent(req.body.title);
  const newId = await db('movies').insert({ title: newTitle }, ['movie_id']);
  res.status(204).json(newId);
});

router.get('/search', async (req, res, next) => {
  const { q } = req.query;
  const query = decodeURIComponent(q);
  const response = {};

  if (!query || query === 'undefined') {
    response.error = 'Query can not be blank';
    return res.json(response);
  }
  const results = await db('movies').select().whereILike('title', `%${query}%`);
  console.log(results);
  res.json(results);
});

export default router;
