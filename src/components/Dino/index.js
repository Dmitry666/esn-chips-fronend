// src/components/NotFound/index.js
import React, { Component } from 'react';

import { Draggable, Droppable } from 'react-drag-and-drop'

import classnames from 'classnames';


import background from './background.png';
import backgroundNight from './background_night.png';


import dino from './dino.png';
import dinoAngry from './dino_angry.png';

import foreground from './foreground.png';

import './style.css';

export default class Dino extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props) {
    super(props);

    this.state = {
        angry: 1.0,
        hungry: 1.0,
        sleep: 1.0
    };

    var request = require('request');
    request('http://localhost:5656/dino', (error, response, body) => {
      console.log('error:', error); // Print the error if one occurred 
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
      console.log('body:', body); // Print the HTML for the Google homepage.

      let dinos = JSON.parse(body);

      if(dinos.count > 0) {
        let dino = dinos[0];

        let angry = dino.angry;
        let hungry = dino.hungry;
        let sleep = dino.sleep;

        this.updateDino(angry, hungry, sleep);
      }
    });
  }

  updateChipsList(angry, hungry, sleep) {

    this.setState({
      angry: angry,
      hungry: hungry,
      sleep: sleep
    });
  }

  onDrop(data) {
      console.log(data)
      // => banana  
  }

  render() {
    const { className, ...props } = this.props;

    let angry = this.state.angry;
    let hungry = this.state.hungry;
    let sleep = this.state.sleep;

    let backgroundImg = sleep > 0.5 ? backgroundNight : background;
    let dinoImg = angry > 0.5 ? dinoAngry : dino;

    return (
      <div className={classnames('Body', className)} {...props}>   
        <div className={classnames('Dino', className)}>
          <Droppable 
              types={['food']} 
              onDrop={this.onDrop.bind(this)}>
              <ul className={classnames('Container', className)}>
                {angry} {hungry} {sleep}
                <div className={classnames('Image', className)}>
                  <img src={backgroundImg} alt="background" />
                </div>
                <div className={classnames('Overlay', className)}>
                  <img src={dinoImg} alt="dino" />
                </div>
                <div className={classnames('Overlay', className)}>
                  <img src={foreground} alt="foreground" />
                </div> 
              </ul>
          </Droppable>
        </div>   
      </div>
    );
  }
}