import express from 'express';

const router = express.Router();

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.send('Hello user!');
});

export default router;
