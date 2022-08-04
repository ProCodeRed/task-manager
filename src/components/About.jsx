import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about_wrapper'>
    <h1>This is About page</h1>
    <Link to="/">Go back</Link>
    </div>
  )
}

export default About