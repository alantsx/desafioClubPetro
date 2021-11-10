const express = require('express');
const router = express.Router();
const axios = require('axios');
const { writeJson } = require('../controllers/jsonControllers/writeJson');

router.get('/users', async (req, res) => {
  const { data } = await axios.get('https://randomuser.me/api/?results=4');
  res.json(data);
});

router.get('/writeusers', async (req, res) => {
  const { data } = await axios.get('https://randomuser.me/api/?results=2');
  const dataResults = data.results;

  const date = Date.now();
  const imported_t = { imported_t: date };

  for (const key in dataResults) {
    Object.assign(key, imported_t);
  }

  console.log(dataResults);
  try {
    // writeJson(dataResults);
    res.send("Usuários registrados!");
  } catch {
    res.send("Algo inesperado aconteceu, tente novamente.");
  }


});

module.exports = router;