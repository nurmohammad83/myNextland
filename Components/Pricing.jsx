'use client'
import { variants } from "@/content/variantes";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section>
      <motion.div
         variants={variants}
         initial="hidden"
         whileInView="visible"
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-lg sm:text-2xl font-bold font-poppins text-[#ff0080]">
          PRICING
        </h2>
        <h1 className="text-3xl sm:text-[3rem]  py-6 text-white">
          Get started today
        </h1>
        <p className="text-start  sm:w-[70%]  sm:text-center text-gray-200 mb-16 text-base sm:text-xl font-normal">
          Choose which Plan suits your organization best.
        </p>
      </motion.div>

      <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row bg-black/10 ">
        <div className="md:w-[30%]  mt-8 h-[490px] px-4 rounded-md border  border-gray-700 py-12">
          <div className="flex flex-col text-gray-400  justify-center items-center space-y-6">
            <h2 className="text-xl font-medium">Personal</h2>
            <p className="text-lg">
              <span className="text-green-500 text-4xl font-bold">$99</span>{" "}
              /month
            </p>
            <button className="bg-white rounded-md font-poppins font-medium text-black w-full py-3 hover:bg-black hover:text-white border hover:border-dimWhite">
              Start your trial
            </button>
          </div>
          <div className="text-white pt-16">
            <h3 className="text-xl font-medium py-4">What’s included</h3>
            <ul className="px-3">
              <li className="text-base leading-8">Only 1 user seat</li>
              <li className="text-base leading-8">5 projects</li>
              <li className="text-base leading-8">
                7-day free trial of Pro Plan
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-[40%]  relative py-12 px-6 h-[550px] border border-green-500 rounded-md">
          <div className="text-white absolute -top-4 right-[30%] text-lg font-poppins bg-green-500 rounded-lg   text-center w-[40%] font-bold">
            MOST POPULAR
          </div>
          <div className="flex  flex-col text-gray-400  justify-center items-center  space-y-6">
            <h2 className="text-2xl font-medium">Professional</h2>
            <p className="text-lg">
              <span className="text-green-500 text-4xl font-bold">$199</span>{" "}
              /month
            </p>
            <button className="bg-black rounded-md font-poppins font-medium text-green-500 w-full py-3 hover:bg-green-500 hover:text-white border border-green-500">
              Start your trial
            </button>
          </div>
          <div className="text-white px-2 pt-16">
            <h3 className="text-xl font-medium py-4">What’s included</h3>
            <ul className="px-3 text-base">
              <li className="text-base leading-8">All professional plan</li>
              <li className="text-base leading-8 ">
                Unlimited user seats included
              </li>
              <li className="text-base leading-8">24/7 live support</li>
              <li className="text-base leading-8">25+ languages</li>
              <li className="text-base leading-8">Access to newest features</li>
            </ul>
          </div>
        </div>

        <div className="md:w-[30%] mt-8 h-[490px] px-4 rounded-md border border-gray-700 py-12">
          <div className="flex flex-col text-gray-400  justify-center items-center space-y-6">
            <h2 className="text-xl font-medium">Enterprise</h2>
            <p className="text-lg">
              <span className="text-green-500 text-4xl font-bold">$399</span>{" "}
              /month
            </p>
            <button className="bg-white rounded-md font-poppins font-medium text-black w-full py-3 hover:bg-black hover:text-white border hover:border-dimWhite">
              Start your trial
            </button>
          </div>
          <div className="text-white pt-16">
            <h3 className="text-xl font-medium py-4">What’s included</h3>
            <ul className="px-3 overflow-hidden">
              <li className="text-base leading-8">All professional plan</li>
              <li className="text-base leading-8">
                Unlimited user seats included
              </li>
              <li className="text-base leading-8">24/7 live support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
