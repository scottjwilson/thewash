import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../../images/logo.png"
export const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center flex-shrink-0 text-primary mr-2">
        <span className="font-semibold text-blue-800 text-xl tracking-tight">
          <img src={logo} alt="mobile wash" />
        </span>
      </div>
      <div className="block sm:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-primary hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block sm:flex sm:items-center sm:w-auto`}
      >
        <div className="text-sm">
          <Link
            to={`/services`}
            href="#responsive-header"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-secondary mr-4"
          >
            Services
          </Link>
          <Link
            to={`/gallery`}
            className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-secondary mr-4"
          >
            Gallery
          </Link>
          <Link
            to={`/pricing`}
            className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-secondary mr-4"
          >
            Pricing
          </Link>
          <Link
            to={`/pricing`}
            className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-secondary mr-4"
          >
            About
          </Link>
          <Link
            to={`/appointment`}
            className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-secondary mr-4"
          >
            Appointments
          </Link>
        </div>
      </div>
    </nav>
  )
}
