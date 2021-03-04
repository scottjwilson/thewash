import React from "react"

export const About = ({ data }) => {
  return (
    <section className="my-8 px-4">
      <h2 className="text-lg capitalize font-light">What we do</h2>
      <h1 className="text-3xl uppercase font-semibold">
        The future of car wash and repairing
      </h1>
      {data.map((about, index) => {
        return (
          <div className="my-6" key={index}>
            <div className="bg-gray-100 w-28 py-4 flex justify-center rounded-md">
              <img clasName="w-max" src={about.img} />
            </div>
            <h1 className="my-2 text-xl">{about.title}</h1>
            <p>{about.body}</p>
          </div>
        )
      })}
    </section>
  )
}
