const express = require('express');
const app = express();
const { join } = require('path');
const bodyParser = require('body-parser');

const port = (process.env.PORT || 8080);
const { generateToken } = require('./token');
const { procImage } = require('./jimp');
const { handleDownload } = require('./download');

// Middleware
app.use('/', express.static('dist'));
app.use(bodyParser.json({limit: '50mb'}));
// End Middleware

// Routes
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '/../dist/index.html'));
});
app.post('/download', generateToken, procImage, function(req, res, next){
  const downloadRoute = '/download/' + req.body.mimetype + '/' + req.body.token;
  app.get(downloadRoute, handleDownload);
  res.send(req.body.token);
});
// End Routes

app.listen(port, function(){
  console.log("Build Mode: Listening at http://localhost:", port);
});
