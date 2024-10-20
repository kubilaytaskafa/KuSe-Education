import { ABOUT_ME } from "../constants/NavText";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3 }}
        className="w-full lg:w-1/2 mt-2 flex  bg-slate-600 rounded-m h-72 text-white "
      >
        <p className="font-bold">{ABOUT_ME}</p>
      </motion.div>
    </div>
  );
};

export default Home;
