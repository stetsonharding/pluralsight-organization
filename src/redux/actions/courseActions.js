import * as types from "./actionTypes"
import * as courseApi from "../../api/courseApi"
import { beginAPICall } from "./apiStatusActions"




export function createCourse(course) {
    return {type: types.CREATE_COURSE, course}
}

export function updateCourse(course) {
    return {type: types.UPDATE_COURSE, course}
}

//Creation of Thunk
export function loadCourses() {
    //A thunk must return a function. Needs to look like this signature.
    //Thunk middlware passes dipatch as an argument to our thunk
    return function(dispatch) {
         //Start API call Status
         console.log("call")
        dispatch(beginAPICall())
        //Load courses from api
        return courseApi.getCourse().then(courses => {
            dispatch({type: types.LOAD_COURSES_SUCCESS, courses })
        }).catch(error => {
            throw error
        })
    
    }
}


//Creation of Thunk
export function saveCourse(course) {
    console.log("Course data 2:", course);
    //A thunk must return a function. Needs to look like this signature.
    //Thunk middlware passes dipatch as an argument to our thunk
    return function(dispatch) {
        //Start API call Status
        dispatch(beginAPICall())
        //Load courses from api
        return courseApi
        .saveCourse(course)
        .then((savedCourse) => {
         course.id
         ? dispatch(updateCourse(savedCourse)) 
         : dispatch(createCourse(savedCourse))
        }).catch(error => {
            throw error
        })
    }
}



