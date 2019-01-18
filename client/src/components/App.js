import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import injectStyles from 'react-jss';
import styles from 'assets/jss/global';

import Navbar from 'components/navbar';
import Home from 'pages/home';
import UpdateModal from './modal';

import {connect} from 'react-redux';
import {toggleModal} from 'redux/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UpdateModal 
        toggleModal={this.props.toggleModal}
        isOpen={this.props.modal} />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}


const withStyles = injectStyles(styles)(App)
const withRedux = connect(({modal}) => {
  return {modal}
}, {toggleModal})(withStyles)
export default withRedux;