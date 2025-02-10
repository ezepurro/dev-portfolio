import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Section = ({ children, sectionRef, sectionId }: { children: React.ReactNode; sectionRef: React.RefObject<HTMLDivElement>; sectionId: string; }) => {
  return (
    <motion.div
      ref={sectionRef}
      id={sectionId}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="h-screen flex justify-center items-center text-3xl"
    >
      {children}
    </motion.div>
  );
};

const Sections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, sectionRefs.current.length - 1));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    sectionRefs.current[currentIndex]?.scrollIntoView({ behavior: "smooth" });
  }, [currentIndex]);

  return (
    <div>
      {[
        { component: <Home />, id: "home" },
        { component: <About />, id: "about-me" },
        { component: <Skills />, id: "skills" },
        { component: <Projects />, id: "projects" },
        { component: <Contact />, id: "contact" }
      ].map(({ component, id }, index) => (
        <Section key={index} sectionRef={(el) => (sectionRefs.current[index] = el)} sectionId={id}>
          {component}
        </Section>
      ))}
    </div>
  );
};

export default Sections;

