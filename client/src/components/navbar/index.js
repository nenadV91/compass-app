import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import injectStyles from 'react-jss';
import styles from './index.style';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let {classes} = this.props;

    return (
      <Navbar className={classes.root} fixed="top" color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">Compass</NavbarBrand>
        <NavbarToggler className={classes.toggler} onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" tag={Link}>Home</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default injectStyles(styles)(MyNavbar)
