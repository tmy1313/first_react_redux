import { ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE } from '../actions/Types';

const initialState = { articles: [] };


export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      })

    case DELETE_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.filter( article => article.id != action.payload.id)
      })

    case UPDATE_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.map( article => article.id === action.payload.id ? {...article, title: action.payload.title} : article)
      });

    default:
      return state;
  }
}
