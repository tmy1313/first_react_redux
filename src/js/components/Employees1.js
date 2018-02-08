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
  import retreiveEmployees from '../actions/RetreiveEmployees';
import deleteEmployee from "../actions/DeleteEmployee";


class Employees1 extends Component {
    constructor() {
        super();
        
        this.state = {
            order: 'asc',
            selected: [],
            page: 0,
            rowsPerPage: 10,
        };
        
        this.handleChangePage = this.handleChangePage.bind(this);        
    }

    componentWillMount() {
        this.props.retreiveEmployees();   
    }

    handleChangePage(event, page) {
        this.setState({ page });
    }

    render() {
        const { data, order, orderBy, selected, rowsPerPage, page } = this.state;

        const rows = this.props.employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee) => {
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
                            count={this.props.employees.length}
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
    retreiveEmployees: retreiveEmployees,
    deleteEmployee: deleteEmployee
  }, dispatch);
}

const mapStateToProps = state => {
    console.log("Employees1.mapstatetoprops:");
    console.log(state);
    return {
        employees: state.employees
    }
}

Employees1.propTypes = {
    employees: PropTypes.array.isRequired,
    retreiveEmployees: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees1);