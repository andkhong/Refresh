import React, { Component } from 'react';

export default class Upload extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      ext: null
     };
  }

  setImage(e){
    let type = '';
    if(e.target.files[0].type === 'image/jpeg') type = 'jpg';
    else type = 'png';
    this.setState({
      image: e.target.files[0],
      ext: type
    });
  }

  procImage(e){
    e.preventDefault();
    if(this.state.image){
      const { upload } = this.props;
      const reader = new FileReader();
      let { image, ext } = this.state;
      reader.onloadend = () => {
        upload(reader.result, ext)
      }
      reader.readAsDataURL(image);
    } else console.log('no image')
  }

  render(){
    return(
      <form onSubmit={this.procImage.bind(this)}>
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
