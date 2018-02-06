import { combineReducers } from "redux";
import articleReducer from "./ArticleReducer";
import employeeReducer from "./EmployeeReducer"

export default combineReducers({ 
    articles: articleReducer,
    employees: employeeReducer 
});
