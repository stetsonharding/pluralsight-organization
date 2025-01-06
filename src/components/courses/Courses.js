import React, { useState } from 'react'
import { connect } from 'react-redux'
 import * as courseActions from "../../redux/actions/courseActions"
  import PropTypes from 'prop-types'
 


const Courses = ({courses, createCourse}) => {



  const [title, setTitle] = useState("")

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  createCourse({title})
  }
  return (

    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type='text' onChange={handleChange} value={title} />
      <input type='submit' value="Save" />
      {Array.isArray(courses) && courses.map((course) => (
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
