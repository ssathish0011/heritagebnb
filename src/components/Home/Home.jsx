import React from 'react'
import Footer from '../Footer/Footer'
import Main from './Main/Main'
import Navbar from '../Navbar/Navbar'
import Slider from './Slider/Slider'
import Testimonial from './Testimonial/Testimonial'
import Sections from './Sections/Sections'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Main/>
      <Testimonial />
      <Sections />
    </div>
  )
}

export default Home
