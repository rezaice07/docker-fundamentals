'use strict';

const express = require('express');
require('dotenv').config();

// Constants
const PORT = 9000;
const HOST = process.env.BASE_URL;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});