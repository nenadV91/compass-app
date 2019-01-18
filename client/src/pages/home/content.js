import React, { Component } from 'react';
import ReactTable from "react-table";
import {Container, Row, Col} from 'reactstrap';
import {Spinner} from 'reactstrap';
import injectStyles from 'react-jss';
import styles from './content.style';
import columns from './columns';
import Header from './header';
import CreateForm from './createForm';
import {removePerson} from 'redux/actions';
import {connect} from 'react-redux';

class HomeContent extends Component {
  renderContent = () => {
    let {persons, classes, loaders, removePerson} = this.props;

    let spinnerStyle = {
      width: '3rem', 
      height: '3rem'
    }

    if(loaders.initial) {
      return <div className={classes.loading}>
        <Spinner  
        style={spinnerStyle}
        className={classes.spinner} 
        color="primary" />
      </div>
    }

    return <div>
      <ReactTable 
      columns={columns({
        classes,
        removePerson
      })}
      data={persons} />
    </div>
  }

  render() {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <Container fluid className={classes.container}>
          <Row className={classes.contentRow}>
            <Col sm={12} md={{size: 4}} lg={{size: 4}}>
              <CreateForm />
            </Col>

            <Col sm={12} md={{size: 8}} lg={{size: 8}}>
              <Header persons={this.props.persons} />

              <div className={classes.content}>
                {this.renderContent()}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const withStyles = injectStyles(styles)(HomeContent)
const withRedux = connect(null, {removePerson})(withStyles)
export default withRedux
