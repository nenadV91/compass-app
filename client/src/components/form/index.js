import React, { Component } from 'react';
import {FormGroup, Input, Button} from 'reactstrap';
import {Spinner, Label, FormFeedback} from 'reactstrap';
import injectStyles from 'react-jss';
import styles from './index.style';
import _ from 'lodash';

const initial = {
    name: "",
    surname: "",
    city: "",
    address: "",
    phone: "",
    errors: []
  }

class Form extends Component {
  state = {}

  componentWillMount = () => {
    let {type, selected} = this.props;

    if(type === "update" && selected) {
      let values = _.pick(selected, _.keys(initial));
      this.setState({...values, errors: []})
    } else {
      this.setState({...initial})
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: []
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    if(!this.state.name) {
      return this.setError('name', 'Name field is required.')
    }

    if(!this.state.surname) {
      return this.setError('surname', 'Surname field is required.')
    }

    let {errors} = this.state;

    if(errors && !errors.length) {
      this.props.handleSubmit(this.state)
      .then(res => {
        this.setState({...initial})
      }).catch(err => {
        console.log(err)
      })
    }
  }

  setError = (field, message) => {
    this.setState(({errors}) => ({
      errors: [...errors, {field, message}]
    }))
  }

  getError = field => {
    if(!this.state.errors) return null
    return this.state.errors.find(error => error.field === field)
  }

  renderFields = () => {
    let {fields, classes} = this.props;

    return fields.map(field => {
      const error = this.getError(field.name);

      return <FormGroup key={field.name}>
        <Label className={classes.label} for={field.name}>
          <span>{field.label}</span>
          {field.required && <sup className="required">*</sup>}
        </Label>

        <Input
        invalid={!!error}
        id={field.name}
        disabled={this.props.loading}
        value={this.state[field.name]}
        name={field.name}
        type={field.type || 'text'}
        onChange={this.handleChange}
        placeholder={field.placeholder}/>

        {error && <FormFeedback>{error.message}</FormFeedback>}
      </FormGroup>
    })
  }

  render() {
    let {classes, loading, type} = this.props;
    let spinnerStyle = {
      borderWidth: 2,
      width: '1rem',
      height: '1rem'
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderFields()}

        <div className={classes.controls}>
          <div>
            <Button
            size="sm"
            color='primary'
            disabled={loading}>
            Submit</Button>

            {type === 'update' && 
            <Button
            size="sm"
            color='secondary'
            onClick={this.props.handleCancel}
            disabled={loading}>
            Cancel</Button>}
          </div>

          {loading && <Spinner 
          style={spinnerStyle}
          color="primary" />}
        </div>
      </form>
    );
  }
}

const withStyles = injectStyles(styles)(Form)
export default withStyles;