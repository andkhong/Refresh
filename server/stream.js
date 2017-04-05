module.exports = {
  download: function(req, res, next) {
    res.download('./jimp.png');
  }
}
