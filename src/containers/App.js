import React, {Component} from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Clients from './Clients';
import WhatAreYouDoing from './WhatAreYouDoing';
import Mask from './Mask';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Header/>
        <Clients/>
        <WhatAreYouDoing/>
        <Mask classExtension="Photo"/>
        <Mask classExtension="Filter"/>
        <Mask classExtension="Black"/>
        <Mask classExtension="White"/>
      </div>
    );
  }
}

export default App;
