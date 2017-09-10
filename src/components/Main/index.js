// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import { Switch, Route } from 'react-router-dom'

import './style.css';

import Home from '../../components/Home';
import About from '../../components/About';
import NotFound from '../../components/NotFound';

export default class Main extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/notFound' component={NotFound}/>
        </Switch>
      </main>
    );
  }
}