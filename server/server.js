const express = require('express');
const app = express();
const { join } = require('path');
const port = (process.env.PORT || 8080);
const bodyParser = require('body-parser');

const jimp = require('./jimp');

// Middleware
app.use('/', express.static('dist'));
app.use(bodyParser.json({limit: '50mb'}));
// End Middleware

// Routes
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '/../dist/index.html'));
});
app.post('/download', jimp.procImage);
app.get('/download/image/png', function(req, res){
  res.download('./jimp.png');
});
app.get('/download/image/jpeg', function(req, res){
  res.download('./jimp.jpg');
});
// End Routes

app.listen(port, function(){
  console.log("Build Mode: Listening at http://localhost:", port);
});
