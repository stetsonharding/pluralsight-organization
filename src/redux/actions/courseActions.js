import * as types from "./actionTypes"
import * as courseApi from "../../api/courseApi"
import { beginAPICall } from "./apiStatusActions"




export function createCourse(course) {
    return { type: types.CREATE_COURSE, course }
}

export function updateCourse(course) {
    return { type: types.UPDATE_COURSE, course }
}

export function deleteCourseOptimistic(course) {
    console.log('runz')
    return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}


//Creation of Thunk
export function loadCourses() {
    //A thunk must return a function. Needs to look like this signature.
    //Thunk middlware passes dipatch as an argument to our thunk
    return function (dispatch) {
        //Start API call Status
        console.log("Load COurses Thunk called")
        dispatch(beginAPICall())
        //Load courses from api
        return courseApi.getCourse().then(courses => {

            dispatch({ type: types.LOAD_COURSES_SUCCESS, courses })
        }).catch(error => {
            throw error
        })

    }
}


//Creation of Thunk
export function saveCourse(course) {
    console.log("Course data for save course thunk:", course);
    //A thunk must return a function. Needs to look like this signature.
    //Thunk middlware passes dipatch as an argument to our thunk
    return function (dispatch) {
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
                dispatch({ type: types.API_CALL_FAILED })
                throw error
            })
    }
}


// export function deleteCourse(course) {
//     console.log('Calling deleteCourse with: ' + course);
//     return function (dispatch) {
//         console.log("Inside deleteCourse thunk");
//         return courseApi.deleteCourse(course)
//         .then(() => {
//                 console.log(course)
//                 console.log("After delete, dispatching deleteCourseOptimistic");
//                 dispatch(deleteCourseOptimistic(course));
//             });
//     };
// }

// export function deleteCourse(course) {
//   return function(dispatch) {
//     // Doing optimistic delete, so not dispatching begin/end api call
//     // actions, or apiCallError action since we're not showing the loading status for this.
//     dispatch(deleteCourseOptimistic(course.id));
//     return courseApi.deleteCourse(course.id);
//   };
// }

export function deleteCourse(course) {
    return function(dispatch) {
      console.log("Dispatching deleteCourseOptimistic for ID:", course);
  
      // Optimistically update state before the API call
      dispatch(deleteCourseOptimistic(course));
  
      // Return API call to ensure it runs
      return courseApi.deleteCourse(course)
        .then(() => {
          console.log("API call completed for deleteCourse:", course);
        })
        .catch((error) => {
          console.error("API delete failed:", error.message);
        });
    };
  }
  

  