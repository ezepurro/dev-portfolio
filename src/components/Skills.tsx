import { SiPython, SiJavascript, SiTypescript } from "react-icons/si";
import { DiJava } from "react-icons/di";
import '../styles/skills.css';


const Skills = () => {
  return (
    <div style={{ display: "flex", gap: "20px", fontSize: "80px"}} className="skills">
        <SiPython className="SiPython" />
        <SiJavascript className="SiJavascript" />
        <SiTypescript className="SiTypescript" />
        <DiJava className="DiJava" />
    </div>
  )
}

export default Skills;
