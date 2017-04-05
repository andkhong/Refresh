import axios from 'axios';

export function downloadImage(config){
  return axios.post('/download', config);
}
