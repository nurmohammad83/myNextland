'use client'
import { cards } from "@/content/helper";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-lg sm:text-2xl font-bold font-poppins text-[#ff0080]">
          CAPABILITIES
        </h2>
        <h1 className="text-3xl sm:text-[3rem]  py-6 text-white">
          What We Have Done
        </h1>
        <p className="text-start  sm:w-[70%]  sm:text-center text-gray-200 mb-16 text-base sm:text-xl font-normal">
          An AI development team comprises of domain experts, data scientists,
          data engineers, product designers, data modelling experts.
        </p>
      </motion.div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-3 border cursor-pointer rounded-md border-gray-300 px-4 py-10 relative"
          >
            <div>
              <span className="absolute  -top-[15%] right-[43%]  p-3 border rounded-full bg-black border-[#ff0080]">
                <img className="w-[30px]" src={card.img} alt="" />
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h5 className="text-white text-xl py-4">{card.title}</h5>
              <p className="text-gray-300 text-sm text-center">{card.des}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Works;
