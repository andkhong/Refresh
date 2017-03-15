import React, { Component } from 'react';

export default class Filter extends Component {
  updateCSS(e){
    e.preventDefault();
    const { setFilter } = this.props;
    setFilter({
      value: e.target.value,
      type: e.target.id
    });
  }
  resetFilter(filter){
    const { reset } = this.props;
    reset(filter);
  }

  render(){
    const { filter, reset } = this.props;
    const percentageSetting = ['blur', 'brightness', 'contrast', 'grayscale', 'hue-rotate', 'invert', 'opacity', 'saturate', 'sepia'];
    const result = percentageSetting.map( (item, index) => {
      let max, type = '%';
      if (item === 'hue-rotate') max = 360, type = 'degrees';
      else if (item === 'blur') type = 'pixel';
      else if (item === 'saturate' || item === 'brightness') max = 300;
      else max = 100;
      return (
        <div key={index}>
            { item }
            <input
              onChange={this.updateCSS.bind(this)}
              type="range"
              id={item}
              key={index}
              value={filter[item]}
              min="0"
              max={max}
            />
            { filter[item] } {type}
            <button onClick={this.resetFilter.bind(this, item)}> Reset {item} </button>
        </div>
      )
    });

    return(
      <div>
        { result }
        <button onClick={this.props.resetImage}> Reset all filters </button>
      </div>
    )
  }
}
