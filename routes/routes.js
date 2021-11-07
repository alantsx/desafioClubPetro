const express = require('express');
const router = express.Router();
const fs = require('fs');
const axios = require('axios');

router.get('/users', async (req, res) => {
  const { data } = await axios.get('https://randomuser.me/api');
  res.json(data);
});

router.get('/users/teste', async (req, res) => {
  const { data } = await axios.get('https://randomuser.me/api/?uuid=c5c0aa82-3d64-4d67-808d-04d1dc0309e1');
  res.json(data);
});

module.exports = router;