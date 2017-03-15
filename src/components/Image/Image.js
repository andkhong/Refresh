import React, { Component } from 'react';

export default class Image extends Component {
  render(){
    return (
      <img
        style={this.props.style}
        src={this.props.image}
      />
    )
  }
}
