import { UPDATE_ARTICLE } from "./Types";

export default function updateArticle(article) {
    return dispatch => {
        dispatch({
            type: UPDATE_ARTICLE,
            payload: article
        });
    }
}

function updateArticleAsync(article) {
    
}