import React, { Component } from 'react';
import Header from './header';
import Interface from './interface';
import Button from './button';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header/>
          <Interface/>
        </div>
      </div>  
    );
  }
}
