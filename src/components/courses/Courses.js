import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as courseActions from "../../redux/actions/courseActions"
import PropTypes from 'prop-types'



const Courses = ({ courses, loadCourses }) => {

  //Can use these instead of mapStateToProps and mapDispatchToProps if needed. Make sure to import these hooks.
  // const dispatch = useDispatch();
  // const courses = useSelector( state => state.courses)

  useEffect( async () => {
loadCourses().catch(error => {
  alert("Loading courses failed" + error)
});
  },[])


  return (
    <>
      <h2>Courses</h2>
      {courses.map((course) => (
        <div key={course.title}><p>{course.title}</p></div>
      ))}
    </>

  )
}

Courses.propTypes = {
  createCourse: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

//Determines what state is passed to our components via props.
//Request only the data your component needs.
const mapStateToProps = (state) => {
  return {
    courses: state.courses || [] // Provide an empty array if courses is undefined
  };
};

//Declare what actions to pass to our component on props
const mapDispatchToProps = (dispatch) => {
  return {
    createCourse(course) {
      dispatch(courseActions.createCourse(course))
    },
    loadCourses(courses) {
      dispatch(courseActions.loadCourses(courses))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses) 
