const Jimp = require('jimp');
const path = require('path');

module.exports = {
  procImage: (req, res, next) => {
    Jimp.read(req.image).then( (result) => {
      let width, height;
      if (req.setting.width && req.setting.height) width = req.setting.width, height = req.setting.height;
      else width, height = Jimp.auto;

      res.download('/refreshed-image', 'refresh.png', function(err){
        if (err) throw err;
        image.resize(width, height)
             .blur()
             .brightness()
             .shade()
             .hue()
             .invert()
             .opacity()
             .sepia()
             .saturate
             .write("refresh.jpg")
        });

    });
  }
}
