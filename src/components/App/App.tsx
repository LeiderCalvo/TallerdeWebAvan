import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Store from '../Store/Store';


import api from '../../utils/api';
import store from '../../stores/stores';

class App extends Component {

  constructor(props: {}) {
    super(props);

    store.getDepartments();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Store />

      </div>
    );
  }
}

export default App;
