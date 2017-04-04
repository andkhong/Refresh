const Jimp = require('jimp');
const path = require('path');

module.exports = {
  procImage: (req, res, next) => {
    const { image, filter } = req.body;
    const bufferedImage = getBuffer(image);
    // const bufferedImage = new Buffer.from(image);

    Jimp.read(bufferedImage).then( (img) => {
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
        const buffer = img.bitmap.data;
        // const encodeString = "data:image/png;base64,";

        console.log(buffer.toString('base64'));

        // res.writeHead(200, {
        //   'Content-Type': 'image/png',
        //   'Content-Disposition': 'attachment;filename=Look.png',
        // });
        // res.end(new Buffer(buffer, 'binary'));

    }).catch( function(err){
      console.log("Jimp has an issue with command, this is due to", err);
    });

  }
}

function getBuffer(string){
  let result = '';
  // Remove "data:image/png;base64, " from string to convert to buffer
  for(let i = 23; i < string.length; i++){
    result = result + string[i];
  }
  return new Buffer.from(result, 'base64');
}
