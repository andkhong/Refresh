import React, { Component } from 'react';
import axios from 'axios';

export default class Download extends Component {
  download(e){
    e.preventDefault();
    const { style, image, downloadImage } = this.props;
    // downloadImage({
      // style,
      // image
    // });
    axios.post('http://localhost:8080', {
      style,
      image
    })
      .then( (res) => {
        console.log(res)
      })
      .catch( (error) => {
        console.log(error)
      })
  }

  render(){
    return(
      <button onClick={this.download.bind(this)}>
        Download
      </button>
    )
  }
}
