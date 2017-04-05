import React, { Component } from 'react';
import axios from 'axios';

export default class Download extends Component {
  download(e){
    e.preventDefault();
    const { image, filter, ext } = this.props;
    const request = { image, filter, ext };
    axios.post('/download', request)
      .then( (res) => {
        console.log('Image successfully generated on server');
        window.open('/download/' + ext);
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
