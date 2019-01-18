import React, { Component } from 'react';
import Form from 'components/form';
import injectStyles from 'react-jss';
import styles from './createForm.style';
import formFields from 'components/fields/form';
import {addPerson} from 'redux/actions';
import {connect} from 'react-redux';
 import {toast} from 'react-toastify';

class CreateForm extends Component {
  handleSubmit = data => {
    return this.props.addPerson(data)
      .then(res => {
        const message = `${res.name} added to users.`
        toast.success(message);
        return Promise.resolve(res)
      })
      .catch(err => {
        toast.error(`Something went wrong`);
      })
  }

  render() {
    let {classes, loaders} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.titleWrapper}>
          <h2 className={classes.title}>Create</h2>
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
