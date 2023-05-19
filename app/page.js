'use client'
import Blog from "@/Components/Blog";
import CTA from "@/Components/CTA";
import Company from "@/Components/Company";
import CompleteProject from "@/Components/CompleteProject";
import ContactUs from "@/Components/ContactUs";
import Faq from "@/Components/Faq";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import LearnAi from "@/Components/LearnAi";
import Pricing from "@/Components/Pricing";
import Testimonial from "@/Components/Testimonial";
import Works from "@/Components/Works";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll()
  return (
    <section id="#" className="bg-black ">
    <motion.div  style={{
      transformOrigin: "0%",
      scaleX: scrollYProgress
    }} className={`fixed sm:block hidden z-50 top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#ed3c94] via-[#c224f2] to-[#00fff2] `}>

    </motion.div>
    <div id="section-1" className=" container mx-auto  py-6 sm:py-16 ">
      <Hero />
    </div>
    <div id="section-2" className="py-6 sm:py-16  px-6 sm:px-12 md:px-16">
      <Company />
    </div>
    <div id="section-3" className="py-6 sm:py-16 px-6 sm:px-12 md:px-16">
      <Works />
    </div>
    <div id="section-4" className="py-6 sm:py-16 px-6 sm:px-12 md:px-16">
      <LearnAi />
    </div>
    <div id="section-5" className="py-6 sm:py-16 px-6 sm:px-12 md:px-16">
      <Pricing />
    </div>
    <div id="section-6" className="py-6 sm:py-16 px-6 sm:px-12 md:px-16">
      <CompleteProject />
    </div>
    <div id="section-7" className="py-6 sm:py-16 px-6 sm:px-12 md:px-16">
      <Testimonial />
    </div>
    <div id="section-8" className="py-6 sm:py-16 px-6 sm:px-12 md:px-16">
      <CTA />
    </div>
    <div id="section-9" className="py-6 sm:py-16 px-6 sm:px-12 md:px-16">
      <Blog />
    </div>
    <div id="section-10" className="py-6 sm:py-16">
      <Faq />
    </div>
    <div id="section-11" className="py-6 sm:py-16">
      <ContactUs />
    </div>
    <div className="py-6 sm:py-16">
      <Footer />
    </div>
  </section>
  )
}
