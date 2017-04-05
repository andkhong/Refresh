const Jimp = require('jimp');

module.exports = {
  procImage: (req, res, next) => {
    const { image, filter } = req.body;
    const bufferedImage = getBuffer(image);
    callJimp(bufferedImage, filter).then( (result) => {
      console.log('Image Processed');
      res.end();
    });
  }
}

function getBuffer(string){
  return new Buffer.from(string.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
}

function callJimp(buffer, filter){
  return Jimp.read(buffer).then( (img) => {
    img.brightness(parseFloat(filter.brightness)/1000)
       .contrast(parseFloat(filter.contrast)/100 - 1) // Value between -1 to 1
       .opacity(parseFloat(filter.opacity)/100)
       if(parseFloat(filter.blur) > 0) img.blur(); // Blur does not work well
       if(parseFloat(filter.sepia) > 0) img.sepia(); // Sepia Does not take in values
       if(parseFloat(filter.invert) > 0) img.invert(); // Invert does not take in values

       // BAD CODE
       let colors = [];
       if(parseFloat(filter.grayscale) > 0) colors.push(
         { apply: 'desaturate', params: [parseFloat(filter.grayscale)]} // grayscale
       );
       if(parseFloat(filter['hue-rotate']) > 0) colors.push(
         { apply: 'hue', params: [parseFloat(filter['hue-rotate'])] }
       );
       if(parseFloat(filter.saturate) > 100) colors.push(
         { apply: 'saturate', params: [parseFloat(filter.saturate)] }
      );
      if(colors.length > 0) img.color(colors);
      // End Bad CODE
      img.write("jimp.png");
      return img.bitmap;
  }).catch( function(err){
    console.log("Jimp has an issue with command, this is due to", err);
  });
}
