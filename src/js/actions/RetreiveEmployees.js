import { REQUEST_EMPLOYEES, RECEIVE_EMPLOYEES } from "./Types";

function requestEmployees() {
    return {
        type: REQUEST_EMPLOYEES
    }
}

function receiveEmployees(employees) {
    return {
        type: RECEIVE_EMPLOYEES,
        payload: employees
    }
}


export default function retreiveEmployees() {
    console.log
    return function (dispatch) {
        dispatch(requestEmployees());

        fetch("http://www.filltext.com/?rows=100&id={index}&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}")
            .then(function(response) {return response.json();})
            .then(function(json) {
                dispatch(receiveEmployees(json));
        });
    }
}


 