import React from 'react'

const Courses = () => {
  return (
    <div className="container">
        <h1>Courses</h1>
        <button className="btn btn-md btn-primary">Add Course</button>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Category</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <td>Securing React Apps with Auth0</td>
     <td>Cory House</td>
     <td>JavaScript</td>
     <td><button className="btn btn-md btn-danger">Delete</button></td>
    </tr>
  
  </tbody>
</table>
    </div>
  )
}

export default Courses
