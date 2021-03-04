import React from "react"

export const CTA = ({ wash, tech }) => {
  return (
    <section className="my-8 mx-4 py-6 bg-white lg:flex md:w-8/12 lg:w-10/12 mx-auto">
      <div className="bg-gray-100 md:flex items-center md:w-11/12">
        <div>
          <img
            src={wash.img}
            alt={wash.title}
            className="rounded-b-2xl md:rounded-r-2xl md:rounded-b-none"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl uppercase font-semibold text-gray-800 ">
            {wash.title}
          </h1>
          <h2 className="text-lg text-secondary py-2">{wash.subtitle}</h2>
          <p className="leading-7 font-light">{wash.body}</p>
          <button className="bg-secondary hover:bg-primary text-white px-6 py-3 my-6 capitalize text-sm transition ease-in duration-100">
            {wash.button}
          </button>
        </div>
      </div>
      <div className="bg-red-400 flex flex-col items-center">
        <div>
          <img src={tech.img} alt={tech.title} className="rounded-b-2xl" />
        </div>
        <div className="p-6">
          <h2 className="text-xl uppercase font-semibold text-gray-800">
            {tech.title}
          </h2>
          <div className="py-6">
            <h2 className="font-light uppercase">{tech.label}-</h2>
            <div className="">
              <p className="font-semibold text-3xl text-secondary">
                {tech.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
