import React, { Component } from 'react';
import Content from './content';
import {connect} from 'react-redux';
import {getAllPersons} from 'redux/actions';
 import {toast} from 'react-toastify';


class Home extends Component {
  componentWillMount = () => {
    this.props.getAllPersons()
    .catch(err => {
      toast.error(`Server connection problem.`)
    })
  }

  render() {
    return <Content
    loaders={this.props.loaders}
    persons={this.props.persons} />
  }
}


export default connect(({persons, loaders}) => {
  return {persons, loaders}
}, {getAllPersons})(Home)
