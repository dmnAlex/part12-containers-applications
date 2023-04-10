const express = require('express');
const router = express.Router();
const redis = require('../redis')

router.get('/', async (_, res) => {
  const count = await redis.getAsync("added_todos") ?? "0"

  res.send({ "added_todos": Number(count) });
});

module.exports = router;
