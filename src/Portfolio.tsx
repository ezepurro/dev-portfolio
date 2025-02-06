import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

const Portfolio = () => {
  return (
    <div>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
            <Welcome />
        </div>

        <div className="animated-bg"></div>   
    </div>
  )
}

export default Portfolio;
