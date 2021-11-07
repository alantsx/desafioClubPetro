const express = require('express');
const router = express.Router();
const fs = require('fs');
const axios = require('axios');

router.get('/', (req, res) => {
  axios.get('https://randomuser.me/api').then((response) => {
    console.log(response);
  })
});

module.exports = router;