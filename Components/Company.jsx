'use client'
import { variants } from "@/content/variantes";
import { motion } from "framer-motion";
const Company = () => {
  return (
    <div>
      <p className="text-xl font-poppins text-gray-400 text-center">
        TRUSTED BY LEADING ORGANIZATIONS
      </p>

      <div className="grid grid-cols-2 py-8 md:grid-cols-3 justify-center items-center lg:grid-cols-6 gap-4">
        <motion.img
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="opacity-70  hover:opacity-100"
          src="/bizi.png"
          alt=""
        />
        <motion.img
           variants={variants}
           initial="hidden"
           whileInView="visible"
          className="opacity-70  hover:opacity-100"
          src="/sixty.png"
          alt=""
        />
        <motion.img
           variants={variants}
           initial="hidden"
           whileInView="visible"
          className="opacity-70  hover:opacity-100"
          src="/bluecode.png"
          alt=""
        />
        <motion.img
           variants={variants}
           initial="hidden"
           whileInView="visible"
          className="opacity-70  hover:opacity-100"
          src="/nomo.png"
          alt=""
        />
        <motion.img
           variants={variants}
           initial="hidden"
           whileInView="visible"
          className="opacity-70  hover:opacity-100"
          src="/zovla.png"
          alt=""
        />
        <motion.img
           variants={variants}
           initial="hidden"
           whileInView="visible"
          className="opacity-70  hover:opacity-100"
          src="/product.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Company;
