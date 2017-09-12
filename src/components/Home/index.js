// src/components/NotFound/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

import Dino from '../../components/Dino';
import Chips from '../../components/Chips';
import AddFood from '../../components/AddFood';


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
        <AddFood />
      </div>
    );
  }
}