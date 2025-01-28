import * as types from "../actions/actionTypes"
import initialState from "./initialState"

export default function apiCallStatusReducer(state = initialState.apiCallsInProgress, action) {
   if(action.type == types.BEGIN_API_CALL) {
      console.log('a'+ JSON.stringify(action) )
      return state + 1;
   }else if(action.type.substring(action.type.length - 8) === "_SUCCESS" ){
      console.log('b'+ JSON.stringify(action) )
      console.log('s' + state)
      return state - 1;
   }

   
   // switch (action.type) {
   //   case types.BEGIN_API_CALL:
   //     return state + 1;
   //   case types.API_CALL_FINISHED:
   //     return state - 1;
   //   default:
   //     return state;
   // }
   return state;
}
