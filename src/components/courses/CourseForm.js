import React from 'react'
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'
import PropTypes from 'prop-types'

const CourseForm = ({course, onChange, authors, onSave}) => {

  return (
    <form className="" onSubmit={onSave}>
        <h2>Course</h2>
       <TextInput name="title" value={course.title} placeholder="Enter Title" label="Title" onChange={onChange} />
       <SelectInput DefaultOption="authors" name="authors" form="authors" onChange={onChange} options={authors} />
       <TextInput name="Category" value={course.category} placeholder="Enter Category" label="Category" onChange={onChange} />
       <button type="submit" className="btn btn-primary mt-3">Save</button>
    </form>
  )
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired

}

export default CourseForm
