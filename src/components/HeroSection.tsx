
import { motion } from 'framer-motion';
import { useLottie } from "lottie-react";
import rocket from "../small-rocket.json";
import EClubLogo from '../images/eclub-logo.png'

export default function HeroSection() {
  const { View: RocketAnimation } = useLottie({
    animationData: rocket,
    loop: true,
  });

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950 text-white min-h-screen px-4">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE3MjU0YyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjQiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSIwIiBjeT0iMzAiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuNCI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjYwIiBjeT0iMzAiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuNCI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMCIgcj0iMiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC40Ij48L2NpcmNsZT4KPGNpcmNsZSBjeD0iMzAiIGN5PSI2MCIgcj0iMiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC40Ij48L2NpcmNsZT4KPC9zdmc+')] bg-repeat z-0"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-32 pt-16 z-20">
        <div className="lg:flex lg:items-center lg:justify-between">
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-start items-center space-x-4">
              {/* <img src={WhartonLogo.src} alt="Wharton Logo" className="h-12 w-auto" />  */}
              <img src={EClubLogo.src} alt="EClub Logo" className="h-16 w-auto invert" />
              </div>
            <h1 className=" max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl pt-4">
              The home for entrepreneurship at <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Wharton</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300 md:text-3xl">
              E-Club is Wharton's largest student-run organization focused on entrepreneurship. We provide resources, events, and networking opportunities for aspiring founders.
            </p>
            <div className="mt-10 flex flex-row items-center gap-y-4 gap-x-6">
              <a
                href="https://groups.wharton.upenn.edu/student_community?club_id=11514"
                className="sm:w-auto rounded-md bg-white px-6 py-3 text-base sm:text-lg font-semibold text-red-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 text-left"
              >
                Join now
              </a>
              <a
                href="https://groups.wharton.upenn.edu/feeds?type=club&type_id=11514&tab=home"
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold text-white bg-opacity-10 bg-zinc-950 backdrop-filter backdrop-blur-lg rounded-md border border-white border-opacity-20 hover:bg-opacity-20 focus:outline-none  transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <span className="relative z-10">Events</span>
                <div className="absolute inset-0 bg-blue-600 opacity-30 blur-xl"></div>
                <svg className="w-5 h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="z-10">
        <motion.div 
          className="absolute bottom-0 md:left-1/2 transform md:-translate-x-1/2 w-full max-w-sm lg:max-w-2xl"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ 
            y: ['100%', '10%'],
            opacity: [0, 1, 1]
          }}
          transition={{ 
            duration: 1.5, 
            times: [0, 0.6, 1],
            ease: ["easeOut", "easeIn"]
          }}
        >
          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[900px] flex justify-center items-center">
            <div className="w-full max-w-[400px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[900px]">
              {RocketAnimation}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
