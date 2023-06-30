"use client";
import { motion } from "framer-motion";

const headingVariant = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const buttonVariant={
  hover: {
    scale: 1.1,
    textShadow: "0px, 0px, 8px, rgb(255, 255, 255)",
    boxShadow: "0px, 0px, 8px, rgb(255, 255, 255)",
    transition:{
      duration:.8,

    }
  },
}

const Hero = () => {
  return (
    <div className="flex flex-col items-center ">
      <motion.div
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        className="text-white text-start w-[80%] sm:text-center"
      >
        <span className="text-[7vmin] font-poppins font-semibold animate__fadeInUp">
          GPT-3
        </span>
        <h1 className="text-[10vmin] font-bold  mt-3 text-gradient">
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
        <motion.button
        
        whileHover='hover'
        className="py-2 px-5 rounded-md text-lg font-semibold bg-white hover:border-white border hover:text-white transition-all ease-in-out duration-500 hover:bg-black text-black">
          Get Started{" "}
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
