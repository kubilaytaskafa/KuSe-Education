import { motion } from "framer-motion";
import { TITLE_DESC } from "../constants/NavText";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, SetOpen] = useState(false);

  const setSlider = () => {
    SetOpen(!open);
  };

  const slideDownAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <motion.div
        className="flex items-center justify-between border-b-2 w-auto border-b-slate-400 h-10 border border-r-2"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h2 className="font-bold font-mono text-lg md:text-xl">
            KuSe Eğitim
          </h2>
          <h1 className="font-bold ml-1 hidden lg:flex ">|</h1>
          <p className="font-bold hidden lg:flex">{TITLE_DESC}</p>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Ara.."
            className="outline-none hover:text-red-600 shrink flex-1"
          />
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center justify-between gap-3 ml-auto pr-4 cursor-pointer">
            <li>Hakkımızda</li>
            <li>Eğitimlerimiz</li>
            <li>Başarılarımız</li>
            <li>
              <button className="bg-black text-white p-1 border rounded-md hover:bg-red-600 transition duration-300 ">
                Giriş Yap-Kaydol
              </button>
            </li>
          </ul>
        </div>

        <div>
          <IoMdMenu
            className="flex lg:hidden text-xl mr-2"
            onClick={setSlider}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        {open && (
          <motion.ul
            className="flex items-center justify-center flex-col gap-3 cursor-pointer mt-1 relative"
            variants={slideDownAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <li className="text-bold hover:bg-slate-500 p-2 border-black transition duration-300">
              Hakkımızda
            </li>
            <li className="text-bold hover:bg-slate-500 p-2 border-black transition duration-300">
              Eğitimlerimiz
            </li>
            <li className="text-bold hover:bg-slate-500 p-2 border-black  transition duration-300">
              Başarılarımız
            </li>
            <li>
              <button className="bg-black text-white p-1 border rounded-md hover:bg-red-600 transition duration-300 ">
                Giriş Yap-Kaydol
              </button>
            </li>
          </motion.ul>
        )}
      </motion.div>
    </>
  );
};

export default Navbar;
