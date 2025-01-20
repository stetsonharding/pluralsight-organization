import React, {useState} from 'react'
import CourseForm from './CourseForm'
import {authors} from "../../../tools/mockData"
const ManageCoursePage = () => {
  const [course, setCourse] = useState({ id: null,
    title: "",
    authorId: null,
    category: ""})

function handleChange(e) {
const {name, value} = e.target;
setCourse(prevCourse => ({
  ...prevCourse,
  [name]: name === "authorId" ? parseInt(value, 10) : value
}))
}

console.log(course)

  return (
    <div>
      <h2>Manage Course</h2>
      <CourseForm authors={authors} course={course} onChange={handleChange} onSave={() => {}} />
    </div>
  )
}

export default ManageCoursePage
