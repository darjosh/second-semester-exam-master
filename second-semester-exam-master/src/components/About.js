import React from 'react'
import {Helmet} from 'react-helmet-async'

function About() {
  return (
    <>
      <Helmet>
        <title>My Exam Page</title>
        <meta
          name='description'
          content='My Altschool second semester exam About page'
        />
        <link rel='canonical' href='/About' />
      </Helmet>

      <h2 className='topic'>Second Semester Examination Project</h2>
      <ul>
        <li>Question three</li>
        <li>Setup react-router, implement Nested routes</li>
        <li>404 page, and Error boundary</li>
        <li>Set up fake userAuthContext using the context API to always carry
        out a fake authentication</li>
        <li>Implement SEO and Navigation menu that will show on each page</li>
        
      </ul>

      
    </>
  )
}

export default About
