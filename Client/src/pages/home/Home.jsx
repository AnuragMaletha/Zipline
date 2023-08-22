import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import About from "../../components/about/About"
import Services from '../../components/services/Services'
import Footer from '../../components/footer/footer'
import Testimonials from '../../components/testimonials/Testimonials'

function Home() {
  return (
    <div className="home">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Footer />
        
    </div>
  )
}

export default Home