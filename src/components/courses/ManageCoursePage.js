import React, { useState, useEffect } from 'react'
import CourseForm from './CourseForm'
// import {authors} from "../../../tools/mockData"
import { useDispatch, useSelector } from 'react-redux'
import { loadAuthors } from "../../redux/actions/authorActions"
import { useParams, useNavigate } from 'react-router-dom'
import { loadCourses, saveCourse } from '../../redux/actions/courseActions'
//import { newCourse } from "../../../tools/mockData"
import {toast} from 'react-toastify'



const ManageCoursePage = () => {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: ""
  })
  const [saving, setSaving] = useState(false) 
  const [errors, setErrors] = useState("")




  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors);
  const courses = useSelector(state => state.courses);
  const { slug } = useParams();
  const navigate = useNavigate();



  useEffect(() => {
    if (courses.length === 0) {
      dispatch(loadCourses())
    } else if (slug) {
      const foundCourse = courses.find(course => course.slug === slug)
      setCourse(foundCourse)
    }


  }, [slug, courses])



  useEffect(() => {
    if (authors.length === 0) {
      dispatch(loadAuthors())
    }
  }, [courses])

  function handleChange(e) {
    const { name, value } = e.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value) : value
    }))
  }





  function handleSave(e) {
    e.preventDefault();
    setSaving(true)
    dispatch(saveCourse(course)).then(() => {
      setErrors("")
      toast.success("Course Saved")
      navigate('/courses')
    }).catch(error => {
      setSaving(false)
      setErrors(error.message)
    })
  }

  return (
    <div>
      <h2>{slug ? "Edit Course" : "Manage Course"}</h2>
      <CourseForm authors={authors} course={course} onChange={handleChange} onSave={handleSave} saving={saving} errors={errors} />
    </div>
  )
}

export default ManageCoursePage
