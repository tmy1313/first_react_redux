import { ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE } from '../actions/Types';

const initialState = [];


export default function(state = initialState, action) {

  switch (action.type) {
      case ADD_ARTICLE:
        return [...state, action.payload];
    
      case DELETE_ARTICLE:
        return state.filter( article => article.id != action.payload.id);
        
      case UPDATE_ARTICLE:
        return state.map( article => article.id === action.payload.id ? {...article, title: action.payload.title} : article);

    default:
      return state;
  }
}
