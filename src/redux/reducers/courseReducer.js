import * as types from "../actions/actionTypes"
import initialState from "./initialState";


const courseReducer = (state = initialState.courses, action) => {
  switch (action.type) {
    case types.CREATE_COURSE:
      console.log('test')
      return [...state, {...action.course}];
      case types.UPDATE_COURSE:
        return state.map(course => course.id === action.course.id ? action.course : course)
    case types.LOAD_COURSES_SUCCESS:
      return action.courses
    case types.DELETE_COURSE_OPTIMISTIC:
      console.log("m " + action.course)
      return state.filter(courses => courses.id !== action.course)
    default:
      return state;
  }
}

export default courseReducer;
