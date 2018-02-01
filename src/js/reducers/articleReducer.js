import { ADD_ARTICLE, DELETE_ARTICLE} from '../actions/Types';

const initialState = { articles: [] };


export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      console.log("Reducer Action Type: " + action.type);
      console.log("Reducer: " + JSON.stringify(state));
      
      const newState = Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      })

      console.log("Reducer: " + JSON.stringify(newState));
      return newState;
    
    case DELETE_ARTICLE:
      console.log("Reducer Action Type: " + action.type);
      console.log("Reducer: " + JSON.stringify(state));

      
      const newState2 = Object.assign({}, state, {
        articles: state.articles.filter( article => article.id != action.payload.id)
      })

      console.log("Reducer: " + JSON.stringify(newState2));
      return newState2;
    
    default:
      console.log("Reducer Action Type: " + action.type);
      console.log("Reducer: " + JSON.stringify(state));
      return state;
  }
}
