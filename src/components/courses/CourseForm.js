import React from 'react'
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'
import PropTypes from 'prop-types'

const CourseForm = ({course, onChange, authors, onSave, saving, errors}) => {

  return (
   
    <form className="" onSubmit={onSave}>
      {errors && <div className="alert alert-danger" role="alert">{errors}</div> }
       <TextInput name="title" value={course.title} placeholder="Enter Title" label="Title" onChange={onChange} />
       <SelectInput DefaultOption="Select Author " name="authorId" form="authors" onChange={onChange} options={authors} />
       <TextInput name="category" value={course.category} placeholder="Enter Category" label="Category" onChange={onChange} />
       <button disabled={saving} type="submit" className="btn btn-primary mt-3">{saving ? "Saving..." : "Save"}</button>
    </form>

   
  )
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: PropTypes.string.isRequired
}

export default CourseForm
