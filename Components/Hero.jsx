'use client'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col items-center ">
      <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-white text-start w-[80%] sm:text-center">
        <span className="text-[7vmin] font-poppins font-semibold animate__fadeInUp">
          GPT-3
        </span>
        <h1
          
          className="text-[10vmin] font-bold  mt-3 text-gradient"
        >
          AI & Machine Learning Development.
        </h1>
      </motion.div>
      <div className="text-start sm:text-center w-[80%] text-gray-200 py-7 text-base sm:text-xl font-poppins font-normal">
        <p>
          We engineer practical data-driven algorithms to implement machine
          learning solutions for startups by separating the AI hype from
          computational realities.
        </p>
      </div>
      <div className="py-5">
        <button className="py-2 px-5 rounded-md text-lg font-semibold bg-white hover:border-white border hover:text-white transition-all ease-in-out duration-500 hover:bg-black text-black">
          Get Started{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
