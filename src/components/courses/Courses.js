import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as courseActions from "../../redux/actions/courseActions"
import * as authorActions from "../../redux/actions/authorActions"
import PropTypes from 'prop-types'
import CourseList from './CourseList'
import { useNavigate } from 'react-router-dom'



const Courses = ({ courses, loadCourses, authors, loadAuthors }) => {

  const navigate = useNavigate(null);

  //Can use these instead of mapStateToProps and mapDispatchToProps if needed. Make sure to import these hooks.
  // const dispatch = useDispatch();
  // const courses = useSelector( state => state.courses)

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses()
    }

    if (authors.length === 0) {
      loadAuthors();
    }
  }, [])

  return (
    <>
      <h2>Courses</h2>
      <button className="mb-20 btn btn-primary add-course" onClick={() => navigate('/course')}>Add Course</button>
      <CourseList courses={courses} />
    </>

  )
}

Courses.propTypes = {
  createCourse: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired
};

//Determines what state is passed to our components via props.authors
//Request only the data your component needs.
const mapStateToProps = (state) => {
  return {
    courses:
      state.authors.length === 0 ?
        []
        : state.courses.map(course => {
          return {
            ...course,
            authorName: state.authors.find(author => author.id === course.authorId).name
          }
        }),
    authors: state.authors
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
    },
    loadAuthors(authors) {
      dispatch(authorActions.loadAuthors(authors))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses) 
