import * as types from "./actionTypes"
import * as courseApi from "../../api/courseApi"




export function createCourse(course) {
    return {type: types.CREATE_COURSE, course}
}


//Creation of Thunk
export function loadCourses() {
    //A thunk must return a function. Needs to look like this signature.
    //Thunk middlware passes dipatch as an argument to our thunk
    return function(dispatch) {
        //Load courses from api
        return courseApi.getCourse().then(courses => {
            dispatch({type: types.LOAD_COURSES_SUCCESS, courses })
        }).catch(error => {
            throw error
        })
    }
}

