// src/components/NotFound/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

//import MyUploader from 'MyUploader';
// <MyUploader />
export default class AddFood extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('AddFood', className)} {...props}>
        
      </div>
    );
  }
}