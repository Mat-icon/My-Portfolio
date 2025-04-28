import React from 'react'
import AboutPage from './AboutPage'

const AboutHome = () => {
  return (
    <div className="w-full flex justify-center h-[100dvh] overflow-hidden">
      <div className="gradient-effect w-full h-full overflow-hidden ">
        <div className="circle circle5"></div>
        <div className="circle circle6"></div>
      </div>
      <AboutPage/>
    </div>
  )
}

export default AboutHome