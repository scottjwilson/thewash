import React from "react"

export const Testimonial = ({ review, data }) => {
  return (
    <section className="my-8 py-2">
      {/* owner row */}
      <div className="bg-gray-100 sm:flex sm:justify-center container mx-auto">
        <div className="bg-blue-200 relative sm:w-11/12 sm:flex flex-col justify-center">
          <h1 className="text-xl opacity-20 p-0 m-0">from the owner...</h1>
          <div className="px-6 pt-6 pb-2">
            <p className="leading-7 font-light">{review.body}</p>
          </div>
          <div className="flex items-center px-4 pb-4">
            <div>
              <img
                src={review.img}
                alt={review.fullName}
                className="rounded-b-2xl"
              />
            </div>
            <div className="ml-4">
              <p className="capitalize">{review.fullName}</p>
            </div>
          </div>
        </div>

        <div className="px-4 my-4 sm:w-11/12">
          <img className="shadow-2xl rounded-2xl" src={data.img} alt="" />
        </div>
      </div>

      {/* brand row */}
      <div className="py-6">
        <h2 className="uppercase text-center text-2xl">{data.title}</h2>
      </div>
      <div className="sm:flex grid grid-cols-3 mx-auto justify-center items-center p-2">
        <div className="flex justify-center">
          <img src={data.client1} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={data.client2} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={data.client3} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={data.client4} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={data.client5} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={data.client6} alt="" />
        </div>
      </div>
    </section>
  )
}
