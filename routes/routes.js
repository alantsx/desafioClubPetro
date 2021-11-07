const express = require('express');
const router = express.Router();
const fs = require('fs');
const axios = require('axios');

router.get('/users', async (req, res) => {
  const { data } = await axios.get('https://randomuser.me/api/?results=4');
  res.json(data);
});

module.exports = router;