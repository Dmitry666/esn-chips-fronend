import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

import Header from '../../components/Header';
import Main from '../../components/Main';

class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <Header />
        <Main />
      </div>
   
    );
  }
}

export default App;
