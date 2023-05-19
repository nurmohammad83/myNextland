'use client'
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-lg sm:text-2xl font-bold font-poppins text-[#ff0080]">
          LEARN MORE
        </h2>
        <h1 className="text-3xl sm:text-[3rem]  py-6 text-white">
          Updated Blog Post
        </h1>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 py-6 sm:py-16 gap-8">
        <motion.div
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col w-full shadow-black/5 shadow-lg rounded-lg p-3"
        >
          <div className="">
            <img
              className="w-full h-[12rem] bg-cover rounded-lg "
              src="/blog_2.jpg"
              alt=""
            />
          </div>
          <div>
            <span className="text-sm py-2 text-gray-300">
              10, June, 2023 . 6min read
            </span>
            <h2 className="text-white text-lg py-2 font-medium cursor-pointer">
              CBA Accelerates AI Deployment Amid Regulatory and Board Scrutiny
            </h2>
            <a className="text-orange-600 font-semibold" href="#">
              Learn More
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col w-full h-[25%] shadow-black/5 shadow-lg rounded-lg p-3"
        >
          <div className="">
            <img
              className="w-full h-[12rem] bg-cover rounded-lg "
              src="/blog_1.jpg"
              alt=""
            />
          </div>
          <div>
            <span className="text-sm py-2 text-gray-300">
              10, June, 2023 . 6min read
            </span>
            <h2 className="text-white text-lg py-2 font-medium cursor-pointer">
              CBA Accelerates AI Deployment Amid Regulatory and Board Scrutiny
            </h2>
            <a className="text-orange-600 font-semibold" href="#">
              Learn More
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col w-full h-[25%] shadow-black/5 shadow-lg rounded-lg p-3"
        >
          <div className="">
            <img
              className="w-full h-[12rem] bg-cover rounded-lg "
              src="/blog_2.jpg"
              alt=""
            />
          </div>
          <div>
            <span className="text-sm py-2 text-gray-300">
              10, June, 2023 . 6min read
            </span>
            <h2 className="text-white text-lg py-2 font-medium cursor-pointer">
              CBA Accelerates AI Deployment Amid Regulatory and Board Scrutiny
            </h2>
            <a className="text-orange-600 font-semibold" href="#">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Blog;
