import { REQUEST_EMPLOYEES, RECEIVE_EMPLOYEES } from '../actions/Types';

const initialState = [];


export default function(state = initialState, action) {
    console.log("In Employee Reducer");
    console.log("ActionType: " + action.type);
    console.log("state: " + JSON.stringify(state));
    switch (action.type) {
        case RECEIVE_EMPLOYEES:
            console.log("action.payload: " + action.payload);
            return action.payload;
        default:
            return state;
    }
}