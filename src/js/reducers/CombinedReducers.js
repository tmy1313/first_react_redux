import { combineReducers } from "redux";
import articleReducer from "./ArticleReducer";

export default combineReducers({ 
    articles: articleReducer 
});
