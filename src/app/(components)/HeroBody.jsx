'use client'

import React, { useEffect, useRef } from 'react';
import ProjectHighlight from './ProjectHighlight';
import Header from './Header';
import Contactbar from './Contactbar';


const HeroBody = () => {
  

  return (
    <div  className="test2 flex flex-col">
      <Header />
      <ProjectHighlight />
      <Contactbar />
    </div>
  );
};

export default HeroBody;
