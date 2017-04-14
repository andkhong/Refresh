import React, { Component } from 'react';
import axios from 'axios';

export default class Download extends Component {
  selectExt(e){

  }
  download(e){
    e.preventDefault();
    const { image, filter, mimetype } = this.props;
    const request = { image, filter, mimetype };
    axios.post('/download', request)
      .then( (res) => {
        console.log('Image has been downloaded to the client');
        const ext = (mimetype === 'image/png') ? '.png' : '.jpg';
        const downloadURL = '/download/' + res.data + ext;
        window.open(downloadURL);
    }).catch( (err) => {
      console.log(err);
    });
  }
  render(){
    return(
      <div>
        <button onClick={this.download.bind(this)}> Download Image </button>
      </div>
    )
  }
};
