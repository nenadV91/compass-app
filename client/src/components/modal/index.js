import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './index.style';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import {connect} from 'react-redux';
import Form from 'components/form';
import fields from 'components/fields/form';
import {unselectPerson, updatePerson, closeModal} from 'redux/actions';

class UpdateModal extends Component {
  handleSubmit = (data) => {
    let {selected} = this.props;

    if(selected && selected.id) {
      let {id} = selected;
      return this.props.updatePerson({id, data})
        .then(res => {
          this.props.closeModal()
          this.props.unselectPerson()
          return Promise.resolve(res)
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    let {classes, loaders} = this.props;

    return (
      <Modal 
      isOpen={this.props.isOpen} 
      toggle={this.props.toggleModal} 
      className={classes.root}>
        <ModalHeader className={classes.title} toggle={this.toggle}>
          <span>Update</span>
        </ModalHeader>

        <ModalBody>
          <Form 
          type="update"
          loading={loaders.update}
          selected={this.props.selected}
          handleSubmit={this.handleSubmit}
          fields={fields} />
        </ModalBody>
      </Modal>
    );
  }
}

const withStyles = injectStyles(styles)(UpdateModal)
const withRedux = connect(({selected, loaders}) => {
  return {selected, loaders}
}, {unselectPerson, updatePerson, closeModal})(withStyles)
export default withRedux;