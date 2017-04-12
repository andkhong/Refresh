import React, { Component } from 'react';
import axios from 'axios';

export default class Download extends Component {
  download(e){
    e.preventDefault();
    const { image, filter, mimetype } = this.props;
    const request = { image, filter, mimetype };
    axios.post('/download', request)
      .then( (res) => {
        console.log('Image has been downloaded to the client');
        const ext = mimetype.endsWith('png') ? '.png' : '.jpg';
        const downloadURL = '/download/' + res.data + ext;
        window.open(downloadURL);
    });
  }
  render(){
    return(
      <button onClick={this.download.bind(this)}> Download Image </button>
    )
  }
};
