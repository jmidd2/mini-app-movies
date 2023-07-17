import express from 'express';
import db from '../db.js';

const router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', async (req, res, next) => {
  const { orderby } = req.query;
  let movies;
  const orderBy = decodeURIComponent(orderby);
  if (orderBy !== '' && orderBy !== 'all') {
    let queryOrder = '';
    switch (orderBy) {
    case 'watched':
      queryOrder = { watched: 1 };
      break;
    case 'not-watched':
      queryOrder = { watched: 0 };
      break;
    default:
      break; //
    }
    movies = await db('movies').select().where(queryOrder).orderBy('title');
  } else {
    movies = await db('movies').select().orderBy('title');
  }
  res.json(movies);
});

router.post('/', async (req, res, next) => {
  const newTitle = decodeURIComponent(req.body.title);
  const newId = await db('movies').insert({ title: newTitle, user_created: 1 }, ['movie_id']);
  res.status(201).json(newId);
});

router.delete('/:movieId', async (req, res, next) => {
  const { movieId } = req.params;
  try {
    await db('movies').where('movie_id', movieId).del();
  } catch (e) {
    console.error(e.message);
    next(e);
  }
  res.status(204).json('Successfully deleted');
});

router.patch('/:movieId', async (req, res, next) => {
  console.log(req.body);
  try {
    await db('movies').where('movie_id', req.body.movie.movie_id).update('watched', req.body.movie.watched);
  } catch (e) {
    console.error(e.message);
    next(e);
  }
  res.status(201).json({ message: 'good to go' });
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
