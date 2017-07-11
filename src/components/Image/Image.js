import React, { Component } from 'react';

function Image(props) {
  return <img style={props.style} src={props.image} />;
};

export default Image;