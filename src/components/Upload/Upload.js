import React, { Component } from 'react';

export default class Upload extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null
    }
  }

  setImage(e){
    this.setState({ image: e.target.files[0] });
  }

  procImage(e){
    e.preventDefault();
    if(this.state.image){
      const { upload } = this.props;
      const reader = new FileReader();
      let image = this.state.image;
      reader.onloadend = () => {
        upload(reader.result)
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
