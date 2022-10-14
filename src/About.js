// import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
// import { AppContext } from './context/productcontex'
import { useProductContext } from './context/productcontex';
 
const About = () => {
//  const {myName} = useContext(AppContext);
const { myName }=useProductContext();
  
  const data={
    name:"my store",
    name2:"list the completed"
  }
  return (
    <div>
    {myName}
      <HeroSection myData={data}/>{" "}
    </div>
  )
}

export default About