import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery.jsx"
import Navbar from "./scenes/Navbar.jsx"
import DotGroup from "./scenes/DotGroup"
import Landing from "./scenes/Landing"
import MySkills from "./scenes/MySkills"
import Projects from "./scenes/Projects"
import Testimonials from "./scenes/Testimonials"
import LineGradient from "./components/LineGradient.jsx"
import Contact from "./scenes/Contact"
import Footer from "./scenes/Footer"
function App() {
  
  const [selectedPage, setSelectedPage] = useState("Home")
  const [isTopOfPage,setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)")
  
  useEffect(()=>{
    const handleScroll = () =>{
        if(window.scrollY === 0) setIsTopOfPage(true)
        if(window.scrollY !== 0) setIsTopOfPage(false)
      }
    window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  
  
  
  
  return (
    <div className="app bg-deep-blue">
      <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
        )}
        <Landing selectedPage={selectedPage}/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills/>
      </div>
        <LineGradient/>
        <div className="w-5/6 mx-auto">
            <Projects/>
        </div>
        <div className="w-5/6 mx-auto">
        <Testimonials/>
        </div>
        <div className="w-5/6 mx-auto">
            <Contact/>
        </div>
            <Footer/>
    </div>
  );
}

export default App;
