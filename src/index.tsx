import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Detalle from './components/Detalle/Detalle';

const routing = (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Detalle" component={Detalle} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render( routing , document.getElementById('root'));
