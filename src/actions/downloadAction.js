import axios from 'axios';

export function downloadImage(config){
  axios.post('/download', config)
    .then( (res) => {
      console.log('Image successfully generated on server');
      window.save('/download');
  });
}
