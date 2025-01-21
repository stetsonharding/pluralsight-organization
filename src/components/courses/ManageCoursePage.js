import React, { useState, useEffect } from 'react'
import CourseForm from './CourseForm'
// import {authors} from "../../../tools/mockData"
import { useDispatch, useSelector } from 'react-redux'
import { loadAuthors } from "../../redux/actions/authorActions"
import { useParams } from 'react-router-dom'

//import { useParams } from 'react-router-dom'

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
  const {slug} = useParams();
  

useEffect(() => {
if(slug) {
  let selectedCourse = courses.find(course => course.slug === slug)
  setCourse(selectedCourse)
}
},[])


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

  console.log(course)

  return (
    <div>
      <h2>Manage Course</h2>
      <CourseForm authors={authors} course={course} onChange={handleChange} onSave={() => { }} />
    </div>
  )
}

export default ManageCoursePage
