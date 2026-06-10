import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import CompanyLogos from '../components/CompanyLogos.jsx'
import RecentJobs from '../components/RecentJobs.jsx'
import Categories from '../components/Categories.jsx'
import AboutCompany from '../components/AboutCompany.jsx'
import CTA from '../components/CTA.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Blog from '../components/Blog.jsx'
import Footer from '../components/Footer.jsx'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CompanyLogos/>
      <RecentJobs/>
     <Categories />
      <AboutCompany />
      <CTA />
      <Testimonials />
      <Blog />
      <Footer/>
    </div>
  )
}

export default Home
