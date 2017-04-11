const express = require('express');
const app = express();
const fs = require('fs');
const { join } = require('path');
const bodyParser = require('body-parser');

const jimp = require('./jimp');
const port = (process.env.PORT || 8080);

// Middleware
app.use('/', express.static('dist'));
app.use(bodyParser.json({limit: '50mb'}));
// End Middleware

// Routes
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '/../dist/index.html'));
});
app.post('/download', jimp.procImage);
app.get('/download/image/png', handleDownload);
app.get('/download/image/jpeg', handleDownload);
// End Routes

app.listen(port, function(){
  console.log("Build Mode: Listening at http://localhost:", port);
});

// Download Middleware
function handleDownload(req, res, next){
  let ext = req.url.endsWith('png') ? 'png' : 'jpg';
  let file = './temp/jimp.' + ext;
  res.download(file, function(err){
    if (err) console.log(err);
    else {
      deleteFile(file);
      res.end();
    }
  });
}

function deleteFile(file){
  fs.unlink(file, (err) => {
    if (err) console.log(err);
    else console.log("Successfully deleted File");
  });
}
