import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
//import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Employees extends Component {
  constructor() {
    super();

    this.state = {
        employees: []
    }
  }

  componentWillMount() {
    const _this = this;
    console.log("employees.componentwillmount()");
    fetch("http://www.filltext.com/?rows=100&id={index}&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}")
    .then(function(response) {return response.json();})
    .then(function(json) {
        _this.setState({employees: json})
    });
  }

//   function displayEditIcon(cell, row) {
//      return "<a href='#' ><span className='fas fa-pencil-alt'></span></a>"; 
//   }

  render() {
    return (
        <BootstrapTable data={this.state.employees} striped hover pagination version="4">
            <TableHeaderColumn dataField='id' isKey={true} >ID</TableHeaderColumn>
            <TableHeaderColumn dataField='fname'>First Name</TableHeaderColumn>
            <TableHeaderColumn dataField='lname'> Last Name</TableHeaderColumn>
            <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
        </BootstrapTable>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    //addArticle: addArticle
  }, dispatch);
}

const mapStateToProps = state => {
  return {
    //articles: state.articles.articles
  }
}

Employees.propTypes = {
 // articles: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
