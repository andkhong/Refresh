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
        window.open('/download/' + mimetype);
    });
  }
  render(){
    return(
      <button onClick={this.download.bind(this)}> Download Image </button>
    )
  }
};
