import React, { Component } from 'react';

export default class Upload extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      mimetype: null
     };
  }

  setImage(e){
    this.setState({
      image: e.target.files[0],
      mimetype: e.target.files[0].type
    });
  }

  procImage(e){
    e.preventDefault();
    if(this.state.image){
      const { upload } = this.props;
      const reader = new FileReader();
      let { image, mimetype } = this.state;
      reader.onloadend = () => {
        upload(reader.result, mimetype)
      }
      reader.readAsDataURL(image);
    } else console.log('no image')
  }

  render(){
    return(
      <form encType="multipart/form-data" onSubmit={this.procImage.bind(this)}>
        <input
          type="file"
          accept="image/x-png,image/jpeg"
          onChange={this.setImage.bind(this)}
        />
        <button> Upload Image </button>
      </form>
    )
  }
}
