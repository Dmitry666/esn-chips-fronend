// src/components/NotFound/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

import Chips from '../../components/Chips';

export default class Home extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Home', className)} {...props}>
        <Dino />
        <Chips />
      </div>
    );
  }
}