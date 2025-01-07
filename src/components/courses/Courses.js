import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as courseActions from "../../redux/actions/courseActions"
import PropTypes from 'prop-types'



const Courses = ({courses, createCourse }) => {

//Can use these instead of mapStateToProps and mapDispatchToProps if needed. Make sure to import these hooks.
  // const dispatch = useDispatch();
  // const courses = useSelector( state => state.courses)

  const [course, setCourse] = useState({title: ""})

  const handleChange = (e) => {
    setCourse({...course, title: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse( course )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type='text' onChange={handleChange} value={course.title} />
      <input type='submit' value="Save" />
      {courses.map((course) => (
        <div key={course.title}><p>{course.title}</p></div>
      ))}
    </form>
  )
}

Courses.propTypes = {
  createCourse: PropTypes.func.isRequired,
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses) 
