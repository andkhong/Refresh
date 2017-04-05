import React, { Component } from 'react';
import axios from 'axios';

export default class Download extends Component {
  download(e){
    e.preventDefault();
    const { filter, image, downloadImage } = this.props;
    const request = { image, filter };
    axios.post('/download', request)
      .then( (res) => {
        console.log(res);
        // window.open('/download');
      }).then( ()=> {
        window.open('/download');
      });
  }
  render(){
    return(
      <button onClick={this.download.bind(this)}> Download </button>
    )
  }
}
