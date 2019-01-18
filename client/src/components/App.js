import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import injectStyles from 'react-jss';
import styles from 'assets/jss/global';

import Navbar from 'components/navbar';
import Home from 'pages/home';
import NotFound from 'pages/notFound';
import UpdateModal from './modal';

import {connect} from 'react-redux';
import {toggleModal} from 'redux/actions';
import {ToastContainer} from 'react-toastify';
import {withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <UpdateModal 
        toggleModal={this.props.toggleModal}
        isOpen={this.props.modal} />

        <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        rtl={false}
        closeOnClick
        pauseOnVisibilityChange
        pauseOnHover />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}


const withStyles = injectStyles(styles)(App)
const withRedux = connect(({modal}) => {
  return {modal}
}, {toggleModal})(withStyles)
const WithRouter = withRouter(withRedux)
export default WithRouter;