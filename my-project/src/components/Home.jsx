import React from 'react'
import HeroSection from './HeroSection'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
function Home() {
  return (
    <div>
     <HeroSection/> 
     <SignUp/>
     <LogIn/>
    </div>
  )
}

export default Home
