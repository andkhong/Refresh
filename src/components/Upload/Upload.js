import React, { Component } from 'react';

export default class Upload extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      mimetype: null
     };
    this.procImage = this.procImage.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  setImage(e){
    this.setState({
      image: e.target.files[0],
      mimetype: e.target.files[0].type
    });
  }

  procImage(e){
    e.preventDefault();
    if (this.state.image){
      const { upload } = this.props;
      const reader = new FileReader();
      let { image, mimetype } = this.state;
      reader.onloadend = () => upload(reader.result, mimetype);
      reader.readAsDataURL(image);
    }
  }

  render(){
    return(
      <form encType="multipart/form-data" onSubmit={this.procImage}>
        <input
          type="file"
          accept="image/x-png,image/jpeg"
          onChange={this.setImage}
        />
        <button> Upload Image </button>
      </form>
    )
  }
}
