import { DELETE_EMPLOYEE } from "./Types";

export default function deleteEmployee(employee) {
    return dispatch => {
        dispatch({
            type: DELETE_EMPLOYEE,
            payload: employee
        });
    }
}
