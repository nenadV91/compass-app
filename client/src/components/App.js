import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import injectStyles from 'react-jss';
import styles from 'assets/jss/global';

import Navbar from 'components/navbar';
import Home from 'pages/home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default injectStyles(styles)(App)
