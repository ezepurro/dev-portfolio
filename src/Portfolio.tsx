import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";



const Portfolio = () => {
  return (
    <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
            <Welcome />
        </div>
        <div className="flex justify-center items-center">
            <Skills />
        </div>
        
        <div className="animated-bg"></div>   
    </>
  )
}

export default Portfolio;
