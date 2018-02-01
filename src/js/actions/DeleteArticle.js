import { DELETE_ARTICLE } from "./Types";

export default function deleteArticle(article) {
    return dispatch => {
        dispatch({
            type: DELETE_ARTICLE,
            payload: article
        });
    }
}

function deleteArticleAsync(article) {
    
}