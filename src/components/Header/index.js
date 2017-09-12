// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

import { Link } from 'react-router-dom'

export default class Header extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <header className={classnames('Header', className)} {...props}>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/notFound'>NotFound</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}