// src/components/NotFound/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

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
      let dino = dinos[0];

      let angry = dino.angry;
      let hungry = dino.hungry;
      let sleep = dino.hungry;

      this.updateDino(angry, hungry, sleep);
    });
  }

  updateChipsList(angry, hungry, sleep) {

    this.setState({
      angry: angry,
      hungry: hungry,
      sleep: sleep
    });
  }

  render() {
    const { className, ...props } = this.props;

    let angry = this.state.angry;
    let hungry = this.state.hungry;
    let sleep = this.state.sleep;

    return (
      <div className={classnames('Home', className)} {...props}>
        {angry} {hungry} {sleep}
      </div>
    );
  }
}