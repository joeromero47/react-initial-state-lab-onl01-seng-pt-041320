// your ImageSlider code here!

import React, { Component } from 'react';

export default class ImageSlider extends Component {

  constructor(props) {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <div id="imageslider" >
          <h1>I am on slide {this.state.currentSlideIndex}</h1>
      </div>
    )
  }

}