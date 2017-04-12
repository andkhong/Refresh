const express = require('express');
const app = express();
const { join } = require('path');
const bodyParser = require('body-parser');

const port = (process.env.PORT || 8080);
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
app.post('/download', procImage);
app.get('/download/:token', handleDownload);
// End Routes

app.listen(port, function(){
  console.log("Build Mode: Listening at http://localhost:", port);
});
