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
    fetch("http://www.filltext.com/?rows=100&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true")
    .then(function(response) {return response.json();})
    .then(function(json) {
        console.log(json);
        _this.setState({employees: json})
    });
  }


  render() {
    return (
        <BootstrapTable data={this.state.employees} striped hover pagination version="4">
            <TableHeaderColumn isKey dataField='fname'>First Name</TableHeaderColumn>
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
