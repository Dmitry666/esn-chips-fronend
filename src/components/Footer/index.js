// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

import { Link } from 'react-router-dom'

export default class Footer extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <footer className={classnames('Footer', className)} {...props}>
      </footer>
    );
  }
}