import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './index.style';
import {Link} from 'react-router-dom';

class NotFound extends Component {
  render() {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <h1>404</h1>
        <h1>Page not found</h1>
        <Link to="/">Go home</Link>
      </div>
    );
  }
}

export default injectStyles(styles)(NotFound)
