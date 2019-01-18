import moment from 'moment';
import React from 'react';
import {Button} from 'reactstrap';


const ControlOption = ({iconName, classes, handleClick}) => {
  return <div className={classes.controlOption}>
    <Button 
    color="white"
    className={`${classes.roundedButton}`}
    onClick={handleClick}>
      <i className={`fa ${iconName}`} 
      aria-hidden="true"></i>
    </Button>
  </div> 
}


export default ({
  classes,
  removePerson,
  toggleModal,
  selectPerson
}) => [{
  Header: 'Name',
  accessor: 'name'
}, {
  Header: 'Surname',
  accessor: 'surname'
}, {
  Header: 'Created date',
  accessor: 'createdDate',
  Cell: props => {
    const date = moment(props.value).format('MMM Do YY');
    return <span>{date}</span>
  }
}, {
  Header: 'City',
  accessor: 'city'
}, {
  Header: 'Address',
  accessor: 'address'
}, {
  Header: 'Phone',
  accessor: 'phone'
}, {
  Header: 'Remove',
  Cell: props => {
    return <ControlOption 
    classes={classes}
    handleClick={() => removePerson(props.original.id)}
    iconName='fa-trash-o' />
  }
}, {
  Header: 'Edit',
  Cell: props => {
    return <ControlOption 
    classes={classes}
    handleClick={() => {
      toggleModal()
      selectPerson(props.original)
    }}
    iconName='fa-pencil' />
  }
}]