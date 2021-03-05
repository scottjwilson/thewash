import React from "react"
import { motion } from "framer-motion"
const PageHero = props => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <header className="flex justify-center text-white bg-blue-900 pt-24 pb-44 rounded-b-2xl">
      <div className="lg:grid grid-cols-2 container">
        <div className="lg:p-6 p-4">
          <motion.h1
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl uppercase font-semibold"
          >
            {props.title}
          </motion.h1>
        </div>
        <div className="lg:p-6 p-4">
          <motion.p
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="leading-6 text-gray-200 text-sm md:text-base"
          >
            {props.text}
          </motion.p>
        </div>
      </div>
    </header>
  )
}

export default PageHero
