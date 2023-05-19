'use client'
import { motion } from "framer-motion";

const CompleteProject = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  md:divide-x space-y-5">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col justify-center pt-2 items-center"
      >
        <h1 className="text-4xl font-bold font-poppins text-green-600">150K</h1>
        <p className="text-gray-500 text-lg font-medium">Complete Project</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col justify-center pt-2 items-center"
      >
        <h1 className="text-4xl font-bold font-poppins text-green-600">400+</h1>
        <p className="text-gray-500 text-lg font-medium">Complete Project</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col justify-center pt-2 items-center"
      >
        <h1 className="text-4xl font-bold font-poppins text-green-600">
          3500+
        </h1>
        <p className="text-gray-500 text-lg font-medium">Complete Project</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col justify-center pt-2 items-center"
      >
        <h1 className="text-4xl font-bold font-poppins text-green-600">50+</h1>
        <p className="text-gray-500 text-lg font-medium">Complete Project</p>
      </motion.div>
    </div>
  );
};

export default CompleteProject;
