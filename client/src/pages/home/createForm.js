import React, { Component } from 'react';
import Form from 'components/form';
import injectStyles from 'react-jss';
import styles from './createForm.style';
import formFields from './formFields';
import {addPerson} from 'redux/actions';
import {connect} from 'react-redux';

class CreateForm extends Component {
  handleSubmit = data => {
    return this.props.addPerson(data)
  }

  render() {
    let {classes, loaders} = this.props;

    return (
      <div>
        <div className={classes.titleWrapper}>
          <h2 className={classes.title}>Create user</h2>
        </div>

        <Form 
        loading={loaders.create}
        handleSubmit={this.handleSubmit}
        fields={formFields} />
      </div>
    );
  }
}

const withStyles = injectStyles(styles)(CreateForm)
const withRedux = connect(({loaders}) => {
  return {loaders}
}, {addPerson})(withStyles)
export default withRedux;