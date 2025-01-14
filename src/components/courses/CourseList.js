import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CourseList = ({ courses }) => {
    console.log(courses)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th />
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Category</th>
                </tr>
            </thead>

            <tbody>
                {courses.map(course => {
                    return (

                        <tr key={course.id}>

                            <td key={course.id}>
                                <a
                                    className="btn btn-sm btn-primary"
                                    href={"http://pluralsight.com/courses" + course.slug}
                                >
                                    Watch
                                </a>
                            </td>
                            <td><Link to={"/course/" + course.slug}>{course.title}</Link></td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                            {/* <td><button className="btn btn-sm btn-danger">Delete</button></td> */}
                        </tr>


                    )
                })}

            </tbody>


        </table>
    )
}


CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList
