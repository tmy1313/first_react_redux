import { REQUEST_EMPLOYEES, RECEIVE_EMPLOYEES, DELETE_EMPLOYEE } from '../actions/Types';

const initialState = [];


export default function(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_EMPLOYEES:
            return action.payload;
        case DELETE_EMPLOYEE:
            return 
        default:
            return state;
    }
}