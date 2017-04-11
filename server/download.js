const fs = require('fs');

module.exports = {
  handleDownload: function(req, res, next) {
    let ext = req.url.endsWith('png') ? 'png' : 'jpg';
    let file = './temp/jimp.' + ext;
    console.log("Step 3:", file, 'will be downloaded to the client')
    res.download(file, function(err){
      if (err) console.log(err);
      else {
        console.log("Step 4: File has been downloaded and will be deleted from server")
        deleteFile(file);
        res.end();
      }
    });
  }
}

function deleteFile(file){
  fs.unlink(file, (err) => {
    if (err) console.log(err);
    else console.log("Step 5:", file, "successfully deleted from server!");
  });
}
