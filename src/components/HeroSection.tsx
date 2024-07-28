import React from "react";
import { motion } from 'framer-motion';
import { useLottie } from "lottie-react";
import rocket from "../small-rocket.json";

export default function HeroSection() {
  const { View: RocketAnimation } = useLottie({
    animationData: rocket,
    loop: true,
  });

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white min-h-screen">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:flex lg:items-center lg:justify-between">
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Innovate. Create. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Elevate.</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Welcome to eClub, Wharton's premier hub for entrepreneurship and innovation. Where visionaries unite to shape the future.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://groups.wharton.upenn.edu/student_community?club_id=11514"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
              >
                Join Now
              </a>
              <a href="#learn-more" className="text-lg font-semibold leading-6 text-white hover:text-indigo-200 transition-colors duration-300">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="absolute bottom-0 md:left-1/2 transform -translate-x-1/2 w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: ['100%', '-35%', '-25%'], opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center">
          <div className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
            {RocketAnimation}
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-indigo-900 to-transparent"></div>
    </div>
  );
}
