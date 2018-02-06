import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Table, {
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
  } from 'material-ui/Table';


class Employees1 extends Component {
    constructor() {
        super();
        this.state = {
            employees: [],
            order: 'asc',
            selected: [],
            page: 0,
            rowsPerPage: 10,
        };
        
    this.handleChangePage = this.handleChangePage.bind(this);        
        
    }

    componentWillMount() {
        const _this = this;
        fetch("http://www.filltext.com/?rows=100&id={index}&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}")
            .then(function(response) {return response.json();})
            .then(function(json) {
                _this.setState({employees: json})
        });
    }

    handleChangePage(event, page) {
        this.setState({ page });
    }

    render() {
        const { data, order, orderBy, selected, rowsPerPage, page } = this.state;

        const rows = this.state.employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee) => {
            return (
                <TableRow key={employee.id}>
                    <TableCell><a href="#" ><span className="fas fa-pencil-alt"></span></a></TableCell>
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>{employee.fname}</TableCell>
                    <TableCell>{employee.lname}</TableCell>
                    <TableCell>{employee.address + ", " + employee.city + "  " + employee.zip}</TableCell>
                </TableRow>
            )
        });

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderColumn>&nbsp;</TableHeaderColumn>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>First Name</TableHeaderColumn>
                        <TableHeaderColumn>Last Name</TableHeaderColumn>
                        <TableHeaderColumn>Address</TableHeaderColumn>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            colSpan={6}
                            count={this.state.employees.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                                'aria-label': 'Previous Page',
                            }}
                            nextIconButtonProps={{
                                'aria-label': 'Next Page',
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage} />
                    </TableRow>
                </TableFooter>
            </Table>
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