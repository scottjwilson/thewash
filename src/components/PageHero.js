import React from "react"

const PageHero = props => {
  return (
    <header className="h-96 w-full text-white bg-blue-900 flex flex-col items-center justify-center">
      <div className="md:flex w-11/12">
        <h1 className="text-7xl uppercase font-semibold">{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </header>
  )
}

export default PageHero
