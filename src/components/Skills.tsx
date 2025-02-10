import { SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiDjango, SiMongodb, SiExpress, SiNodedotjs, SiReact } from "react-icons/si";
import { DiJava } from "react-icons/di";
import '../styles/skills.css';
import Tech from "./Tech";

const Skills = () => {
  return (
    <div className="skills" id="skills">
        <p>Programming Languages</p>
        <div className="lang" style={{ display: "flex", gap: "20px", fontSize: "80px" }} >
            <Tech component={ <SiJavascript className="SiJavascript" /> } name="Javascript" />
            <Tech component={ <SiTypescript className="SiTypescript" /> } name="Typescript" />
            <Tech component={ <SiPython className="SiPython" /> } name="Python" />
            <Tech component={ <DiJava className="DiJava" /> } name="Java" />
        </div>
        <p>Frontend Development</p>
        <div className="frontend" style={{ display: "flex", gap: "20px", fontSize: "80px" }} >
            <Tech component={ <SiHtml5 className="SiHtml5" /> } name="HTML" />
            <Tech component={ <SiCss3 className="SiCss3" /> } name="CSS" />
            <Tech component={ <SiReact className="SiReact" /> } name="React" />
            <Tech component={ <SiTailwindcss className="SiTailwindcss" /> } name="TailwindCSS" />
        </div>
        <p>Backend Development</p>
        <div className="backend" style={{ display: "flex", gap: "20px", fontSize: "80px" }} >
            <Tech component={ <SiDjango className="SiDjango" /> } name="Django" />
            <Tech component={ <SiNodedotjs className="SiNodedotjs" /> } name="Node.js" />
            <Tech component={ <SiExpress className="SiExpress" /> } name="Express" />
        </div>
        <p>Databases</p>
        <div className="database" style={{ display: "flex", gap: "20px", fontSize: "80px" }} >
            <Tech component={ <SiMongodb className="SiMongodb" /> } name="MongoDB" />
        </div>
    </div>
  );
}

export default Skills;