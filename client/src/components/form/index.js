import React, { Component } from 'react';
import {FormGroup, Input, Button} from 'reactstrap';
import {Spinner} from 'reactstrap';
import injectStyles from 'react-jss';
import styles from './index.style';

const initial = {
    name: "",
    surname: "",
    city: "",
    address: "",
    phone: ""
  }

class Form extends Component {
  state = {...initial}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state).then(res => {
      this.setState({...initial})
    }).catch(err => {
      console.log(err)
    })
  }

  renderFields = () => {
    let {fields} = this.props;

    return fields.map(field => {
      return <FormGroup key={field.name}>
        <Input
        disabled={this.props.loading}
        value={this.state[field.name]}
        name={field.name}
        type={field.type || 'text'}
        onChange={this.handleChange}
        placeholder={field.placeholder}/>
      </FormGroup>
    })
  }

  render() {
    let {classes, loading} = this.props;
    let spinnerStyle = {
      borderWidth: 2,
      width: '1rem',
      height: '1rem'
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderFields()}

        <div className={classes.controls}>
          <Button
          size="sm"
          color='primary'
          disabled={loading}>
          Submit</Button>

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