const fs = require('fs');
const { promisify } = require('util');

const unLinkAsync = promisify(fs.unlink);

module.exports = {
  handleDownload: function(req, res, next) {
    let file = './temp/' + req.params.token;
    console.log("Step 3: Initiating file download to client");
    res.download(file, (err) => {
      if (err) console.log("File was not created conventionally on our server, please use the app as intended");
      else {
        console.log("Step 4: File has been downloaded and will be deleted from server");
        deleteFile(file);
        res.end();
      }
    });
  }
}

function deleteFile(file){
  unLinkAsync(file).then(() => console.log("Step 5:", file, "successfully deleted from server!"));
}
