import React from 'react'
import Mentor from './components/Mentor'
import Navbar from './components/Navbar'
import Courses from './components/Courses'
import About from './components/About'
import Feedback from './components/Feedback'
import TopMentors from './components/TopMentors'
import Footer from './components/Footer'


const Page = () => {
  return (
    <div className='bg-blue-50 min-h-screen space-y-10 overflow-x-hidden'>
        <Navbar/>
        <Mentor/>
        <Courses/>
        <About/>
        <Feedback/>
        <TopMentors/>
        <Footer/>
    </div>
  )
}

export default Page