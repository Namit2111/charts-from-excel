import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from "../components/landingpage/Hero"
import Features from '../components/landingpage/Features'
import HowItWorks from '../components/landingpage/HowItWorks'
import CTASection from '../components/landingpage/CTASection'
import Footer from '../components/common/Footer'
const LandingPage = () => {
  return (
    <div className="min-h-screen">
   <Navbar/> 
   <Hero/>
   <Features/>
   <HowItWorks/>
   <CTASection/>
   <Footer/>
   </div>
  )
}

export default LandingPage