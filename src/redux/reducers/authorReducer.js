import * as types from "../actions/actionTypes"
import initialState from "./initialState";

const authorReducer = (state = initialState.authors, action) => {
    switch (action.type) {
      case types.LOAD_AUTHORS:
        return action.authors
      default:
        return state;
    }
  }
  
  export default authorReducer;
  