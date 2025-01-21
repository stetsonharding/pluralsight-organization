import React, { useState, useEffect } from 'react'
import CourseForm from './CourseForm'
// import {authors} from "../../../tools/mockData"
import { useDispatch, useSelector } from 'react-redux'
import { loadAuthors } from "../../redux/actions/authorActions"
import { useParams } from 'react-router-dom'
import { loadCourses, saveCourse } from '../../redux/actions/courseActions'


const ManageCoursePage = () => {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: ""
  })

  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors);
  const courses = useSelector(state => state.courses);
  const { slug } = useParams();


  useEffect(() => {

    if (courses.length === 0) {
      dispatch(loadCourses()).catch(error => {
        alert('loading couses failed' + error)
      })
    }else if(slug) {

   setCourse(courses.find(course => course.slug === slug))
      
    }


  }, [])


  useEffect(() => {
    dispatch(loadAuthors())
  }, [])

  function handleChange(e) {
    const { name, value } = e.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }))
  }

  function handleSave(e) {
    e.preventDefault();
    dispatch(saveCourse(course))
  }

  return (
    <div>
      <h2>{slug ? "Edit Course" : "Manage Course"}</h2>
      <CourseForm authors={authors} course={course} onChange={handleChange} onSave={handleSave} />
    </div>
  )
}

export default ManageCoursePage
