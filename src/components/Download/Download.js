import React, { Component } from 'react';
import axios from 'axios';

export default class Download extends Component {
  download(e){
    e.preventDefault();
    const { filter, image, downloadImage } = this.props;
    const request = {
      image,
      filter
    };
    axios.post('/', request)
      .then( function(res) {
        console.log('Image Processed')
        // Do HTML download with the Response
      });
  }

  render(){
    return(
      <button onClick={this.download.bind(this)}>
        Download
      </button>
    )
  }
}
