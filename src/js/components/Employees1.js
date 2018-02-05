import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { 
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    } from "material-ui/Table";


class Employees1 extends Component {
    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

    componentWillMount() {
        const _this = this;
        fetch("http://www.filltext.com/?rows=100&id={index}&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}")
            .then(function(response) {return response.json();})
            .then(function(json) {
                _this.setState({employees: json})
        });
    }

    render() {
        const rows = this.state.employees.map((employee) => {
            return (
                <TableRow key={employee.id}>
                    <TableRowColumn><a href="#" ><span className="fas fa-pencil-alt"></span></a></TableRowColumn>
                    <TableRowColumn>{employee.id}</TableRowColumn>
                    <TableRowColumn>{employee.fname}</TableRowColumn>
                    <TableRowColumn>{employee.lname}</TableRowColumn>
                    <TableRowColumn>{employee.address}</TableRowColumn>
                </TableRow>
            )
        });

        return (
            <MuiThemeProvider>
                <Table height={"300px"}>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>&nbsp;</TableHeaderColumn>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>First Name</TableHeaderColumn>
                            <TableHeaderColumn>Last Name</TableHeaderColumn>
                            <TableHeaderColumn>Address</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {rows}
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        );
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

Employees1.propTypes = {
 // articles: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees1);