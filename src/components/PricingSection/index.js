import React from "react"

export const PricingSection = ({ washes }) => {
  return (
    <section className="mx-auto sm:px-12 px-4 -mt-32">
      <div className="grid lg:grid-cols-3 gap-8 bg-white rounded-lg shadow-2xl">
        {washes.map((wash, index) => {
          return (
            <article className="p-6">
              <div className="flex flex-col">
                <h1 className="text-secondary text-3xl md:text-5xl font-bold">
                  ${wash.price}
                </h1>
                <h2 className="text-gray-700 md:text-2xl text-xl uppercase font-semibold">
                  {wash.title}
                </h2>
                <div className="py-4 flex">
                  <ul>
                    {wash.includes.map(include => (
                      <li key={include} className="flex capitalize">
                        <svg
                          className="w-6 h-6 mr-2 text-secondary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {include}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
