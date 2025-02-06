import { motion } from "framer-motion";
import '../styles/welcome.css';

const Welcome = () => {
  return (
    <div className="welcome">
        <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            EZEQUIEL PURRO
        </motion.h1>
        <motion.p
            initial={{opacity: 0, x:20}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            WEB DEVELOPER & SOFTWARE ENGINEERING STUDENT
        </motion.p>
    </div>
  )
}

export default Welcome
