import React from "react"
import { motion } from "framer-motion"

export const ServicesSection = ({ services }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="grid lg:grid-cols-2 gap-8 mx-auto sm:px-12 px-4 -mt-24">
      {services.map((service, index) => {
        return (
          <motion.article
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            key={index}
            className="bg-gray-100 shadow"
          >
            <div className="md:grid grid-cols-2">
              <div>
                <img
                  className="h-84 rounded-r-lg"
                  src={service.img}
                  alt={service.title}
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <h1 className="sm:text-4xl text-xl uppercase mb-4">
                  {service.title}
                </h1>
                <p className="text-sm sm:text-base">{service.body}</p>
              </div>
            </div>
          </motion.article>
        )
      })}
    </section>
  )
}
