import { ADD_ARTICLE } from "./Types";

export default function addArticle(article) {
    return dispatch => {
        dispatch(addArticleAsync(article));
    }
}

function addArticleAsync(article) {
    return {
        type: ADD_ARTICLE,
        payload: article
    };
}