'use client'
import { motion } from "framer-motion";

const LearnAi = () => {
  return (
    <section>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl sm:text-[3rem] font-poppins text-white">
          Democratize AI
        </h1>
        <p className="text-start  sm:w-[70%]  sm:text-center text-gray-200 py-3 text-base sm:text-xl font-normal">
          Our comprehensive automated machine learning (autoML) capabilities
          transform how AI is created and consumed.
        </p>
      </motion.div>

      <div className="inline-block md:flex py-8 text-white">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col py-6 space-y-8"
        >
          <div className="flex justify-center items-center space-x-4">
            <div>
              <img src="/ai-6.png" className="w-12 h-12" alt="" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Annotate</h2>
              <p className="text-gray-500">
                Rely on machine learning forautomatically identifies and labels
                objects in images, videos, and text
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <div>
              <img src="/ai-4.png" className="w-12 h-12" alt="" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Annotate</h2>
              <p className="text-gray-500">
                Rely on machine learning forautomatically identifies and labels
                objects in images, videos, and text
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <div>
              <img src="/ai-3.png" className="w-12 h-12" alt="" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Annotate</h2>
              <p className="text-gray-500">
                Rely on machine learning forautomatically identifies and labels
                objects in images, videos, and text
              </p>
            </div>
          </div>
        </motion.div>
        <div className="py-4 relative z-20">
          <div className="absolute bg-gradient-to-r from-[#ff0080] to-[#ff0080] w-[10rem] md:w-[28rem] h-[5rem] md:h-[14rem] top-[20%] left-[20%] rounded-3xl -z-10 blur-[82px]"></div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="px-6 md:px-16"
          >
            <img src="/dashboard-dark.png" className="w-full h-full " alt="" />
          </motion.div>
        </div>
      </div>
      {/* middiel */}
      <div className="md:flex flex-row-reverse py-16 text-white">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 py-8 flex flex-col space-y-8"
        >
          <div className="flex justify-center items-center space-x-4">
            <div>
              <img src="/ai-2.png" className="w-12 h-12" alt="" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Evaluate</h2>
              <p className="text-gray-500">
                Understanding the reliability of any AI model, based on outputs
                by feeding the test dataset into the model and comparing it with
                actual answers.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <div>
              <img src="/ai-1.png" className="w-12 h-12" alt="" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Generate</h2>
              <p className="text-gray-500">
                The AI generator is a tool is based on a deep learning algorithm
                that has been trained on a large dataset.
              </p>
            </div>
          </div>
        </motion.div>
        <div className=" md:w-1/2 relative z-20">
          <div className="absolute bg-gradient-to-r from-[#ff0080] to-[#ff0080] w-[10rem] md:w-[18rem] h-[5rem] md:h-[10rem] top-[20%] left-[30%] rounded-3xl -z-10 blur-[82px]"></div>

          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="px-6 md:px-16"
          >
            <img src="/mobile.png" className="w-full h-full " alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearnAi;
