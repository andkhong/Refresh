const express = require('express');
const app = express();

const jimp = require('./jimp');

app.post('/', jimp.procImage);

app.listen( () => {
  console.log('Post is listening to port:8080')
});
