import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Section = ({ children, sectionId }: { children: React.ReactNode; sectionId: string }) => {
  return (
    <motion.div
      key={sectionId} 
      id={sectionId}
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -50 }} 
      transition={{ duration: 0.2 }} 
      className="h-screen flex justify-center items-center text-3xl"
    >
      {children}
    </motion.div>
  );
};

const Sections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sections = [
    { component: <Home />, id: "home" },
    { component: <About />, id: "about" },
    { component: <Skills />, id: "skills" },
    { component: <Projects />, id: "projects" },
    { component: <Contact />, id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <Section key={sections[currentIndex].id} sectionId={sections[currentIndex].id}>
          {sections[currentIndex].component}
        </Section>
      </AnimatePresence>
    </div>
  );
};

export default Sections;
