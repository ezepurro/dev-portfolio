import { motion } from "framer-motion";
import '../styles/welcome.css';

const Home = () => {
  return (
    <div className="welcome">
            <motion.h1
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-2xl font-bold underline"
            >
                EZEQUIEL PURRO
            </motion.h1>
            <motion.p
                initial={{opacity: 0, x:-100}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                WEB DEVELOPER & SOFTWARE ENGINEERING STUDENT
            </motion.p> 
        </div>
  )
}

export default Home
