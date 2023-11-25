import { ChevronRightIcon } from '@heroicons/react/20/solid'
import React, { useRef, useState } from "react";
import { useLottie } from "lottie-react";
import rocket from "../small-rocket.json";
import {motion} from 'framer-motion'

export default function Example() {


const options = {
  animationData: rocket,
  loop: true,
};

// function getRelativeCoordinates(event, referenceElement) {
//   const position = {
//     x: event.pageX,
//     y: event.pageY
//   };

//   // console.log(position)

//   const offset = {
//     left: referenceElement.offsetLeft,
//     top: referenceElement.offsetTop,
//     width: referenceElement.clientWidth,
//     height: referenceElement.clientHeight
//   };

//   let reference = referenceElement.offsetParent;

//   while (reference) {
//     offset.left += reference.offsetLeft;
//     offset.top += reference.offsetTop;
//     reference = reference.offsetParent;
//   }

//   // console.log({
//   //   x: position.x - offset.left,
//   //   y: position.y - offset.top,
//   //   width: offset.width,
//   //   height: offset.height,
//   //   centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
//   //   centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
//   // })
//   return {
//     x: position.x - offset.left,
//     y: position.y - offset.top,
//     width: offset.width,
//     height: offset.height,
//     centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
//     centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
//   };
// }

// const [mousePosition, setMousePosition] = useState({});
// const boxRef = useRef();
// const lottieRef = useRef();
// const handleMouseMove = e => {
//   setMousePosition(getRelativeCoordinates(e, lottieRef.current));
// };
const { View } = useLottie(options);
  
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full bg-white stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className=" mx-auto max-w-7xl px-6 pb-24 sm:pt-24 lg:flex lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-24">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to eClub. 
          </h1>
          <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Wharton's largest student-run entrepreneurship and innovation community.</p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us to make Wharton the best business school for entrepreneurship and innovation.
          </p> */}
          <img></img>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="https://groups.wharton.upenn.edu/student_community?club_id=11514"
              className="mb-12 rounded-md bg-[#990000] px-7 py-5 text-lg font-semibold text-white shadow-sm hover:bg-[#c5093b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#110f5b]"
            >
              Join Now
            </a>
          </div>
        </div>
      <motion.div className='md:ml-24 mt-24 max-w-2xl md:h-[35rem] w-full' initial={{opacity:0.9, scale:0.1, y:800}} animate={{opacity:[0.9,1,1], scale: [0.1,0.9,1.1], y:[800,-1000,-120]}} transition={{duration:2.5, times:[0,0.3,1]}}>
              {View}
      </motion.div>
      </div>
    </div>
  )
}
