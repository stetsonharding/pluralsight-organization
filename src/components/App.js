import React from 'react'
import {Routes, Route} from 'react-router-dom'

import HomePage from './home/HomePage'
import Aboutpage from './about/AboutPage'
import Header from './common/Header'
import PageNotFound from './PageNotFound'
import Courses from './courses/Courses'
import ManageCoursePage from './courses/ManageCoursePage'

const App = () => {
  return (
    <div className='container'>   
    <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<Aboutpage />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/course/:slug?' element={<ManageCoursePage />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
      
    </div>
  )
}

export default App
