const Jimp = require('jimp');

module.exports = {
  procImage: (req, res, next) => {
    const { image, filter, mimetype } = req.body;
    const bufferedImage = getBuffer(image);
    const token = require('uuid/v1')();
    callJimp(bufferedImage, filter)
      .then( (jimp) => {
        writeFile(jimp, token, mimetype)
          .then( () => {
            console.log('Step 2: Image is processed and ready for download');
            res.send(token);
        }).catch( (err) => {
          console.log(err);
        });
    });
  }
}

function getBuffer(string){
  return new Buffer.from(string.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
}

function callJimp(buffer, filter){
  return Jimp.read(buffer).then( (image) => {
    image.brightness(parseFloat(filter.brightness)/1000)
       .contrast(parseFloat(filter.contrast)/100 - 1) // Value between -1 to 1
       .opacity(parseFloat(filter.opacity)/100)
       if(parseFloat(filter.blur) > 0) image.blur(); // Blur does not work well
       if(parseFloat(filter.sepia) > 0) image.sepia(); // Sepia Does not take in values
       if(parseFloat(filter.invert) > 0) image.invert(); // Invert does not take in values

       // BAD CODE
       let colors = [];
       if(parseFloat(filter.grayscale) > 0) colors.push(
         { apply: 'desaturate', params: [parseFloat(filter.grayscale)] } // grayscale
       );
       if(parseFloat(filter['hue-rotate']) > 0) colors.push(
         { apply: 'hue', params: [parseFloat(filter['hue-rotate'])] }
       );
       if(parseFloat(filter.saturate) > 100) colors.push(
         { apply: 'saturate', params: [parseFloat(filter.saturate)] }
      );
      if(colors.length > 0) image.color(colors);
      // End Bad CODE
      return image;
  }).catch( function(err){
    console.log("Jimp has an issue with command, this is due to", err);
  });
}

function writeFile(jimp, token, mimetype){
  return new Promise( (resolve, reject) => {
    let ext = (mimetype === 'image/jpeg') ? '.jpg': '.png';
    let file = "temp/" + token + ext;
    jimp.write(file, () => {
      console.log("Step 1:", file, 'successfully written!');
      resolve();
    });
  });
}
