// src/components/Chips/index.js
import React, { Component } from 'react';
//import Slider from 'react-slick';
import Slider from 'react-image-slider';
import { Draggable, Droppable } from 'react-drag-and-drop'

//import Service from '../../service/service';

import classnames from 'classnames';

import './style.css';
import '../../../node_modules/react-image-slider/lib/image-slider.css'
export default class Chips extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props) {
    super(props);

    this.state = {
      chips: []
    };

    var request = require('request');
    request('http://localhost:5656/chips', (error, response, body) => {
      console.log('error:', error); // Print the error if one occurred 
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
      console.log('body:', body); // Print the HTML for the Google homepage.

      let chips = JSON.parse(body);
      this.updateChipsList(chips);
    });
  }

  updateChipsList(chips) {

    this.setState({
      chips: chips
    });
  }

  render() {
    const { className, ...props } = this.props;

    let chips = this.state.chips;

    let images = []
    for (let chip of chips) {
      let icon = chip.icon;
      console.log('icon:', icon);
      images.push(icon);
    }
    console.log('images:', images);

    return (
      <div className={classnames('Chips', className)} {...props}>
        <Slider images={images} isInfinite delay={5000}>
          {images.map((image, key) => <Draggable type="food" data="chip"><div className={classnames('ImageContainer', className)} key={key}><img src={image} /></div></Draggable>)}
        </Slider>
      </div>
    );
  }
}