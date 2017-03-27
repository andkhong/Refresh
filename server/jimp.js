const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');
const request = require('request');

module.exports = {
  procImage: (req, res, next) => {
    const { image, filter } = req.body;
    const bufferImage = getBuffer(image);
    Jimp.read(bufferedImage).then( (result) => {
      result.brightness(parseFloat(filter.brightness)/1000)
        .contrast(parseFloat(filter.contrast)/100 - 1) // Value between -1 to 1
        .opacity(parseFloat(filter.opacity)/100)
        // .color([
        //   { apply: 'desaturate', params: [parseFloat(filter.grayscale)]}, // grayscale
        //   { apply: 'hue', params: [parseFloat(filter['hue-rotate'])] },
        //   // { apply: 'saturate', params: [90] }
        // ])
        if(parseFloat(filter.blur) > 0) result.blur(); // Blur does not work well
        if(parseFloat(filter.sepia) > 0) result.sepia(); // Sepia Does not take in values
        if(parseFloat(filter.invert) > 0) result.invert(); // Invert does not take in values
        console.log(result);
    }).catch( function(err){
      console.log("Jimp has an issue with command, this is due to", err);
    });
  }
}

function getBuffer(string){
  let result = '';
  for(let i = 23; i < string.length; i++){
    result = result + string[i];
  }
  return new Buffer.from(result, 'base64');
}
