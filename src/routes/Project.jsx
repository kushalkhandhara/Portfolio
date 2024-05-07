import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import WorkCard from '../components/WorkCard';


export default function Project() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works that you may like it"  />
      <WorkCard/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}
