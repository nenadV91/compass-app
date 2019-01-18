import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './header.style';

class Header extends Component {
  render() {
    let {classes, persons} = this.props;

    if(!persons) {
      return null
    }

    return (
      <div className={classes.header}>
        <div className={classes.left}>
          <h2 className={classes.title}>Users</h2>
          
        </div>

        <div className={classes.result}>
          <strong className={classes.strong}>{persons.length}</strong>
          <span> results found</span>
        </div>
      </div>
    );
  }
}

export default injectStyles(styles)(Header)
