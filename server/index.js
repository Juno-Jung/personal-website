const express = require('express');

const app = express();
const { HOST, PORT } = require('./config');

app.use(express.static('public')); // This means that I can serve any static file from a public folder

app.listen(PORT, () => {
  console.log(`Juno's Website is listening at ${HOST}:${PORT}`);
});