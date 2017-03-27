const express = require('express');
const app = express();
const { join } = require('path');
const port = (process.env.PORT || 8080);
const bodyParser = require('body-parser');

const jimp = require('./jimp');

// Middleware
app.use('/', express.static('dist'));
app.use(bodyParser.json());
// End Middleware

// Routes
app.get('/', (req, res) =>{
  res.sendFile(join(__dirname, './../dist/index.html'));
});
app.post('/', jimp.procImage);
// End Routes

app.listen(port, function(){
  console.log("Build Mode: Listening at http://localhost:", port);
});
