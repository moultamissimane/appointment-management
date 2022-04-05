import React from 'react'

export const Navbar = () => {
  return (
    <nav className="py-6 bg-white w-screen">
      <div className="flex items-center justify-between mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
        <section className="flex items-center text-gray-900 space-x-2">
          <a href="#" className="font-bold text-xl focus:ring focus:ring-amber-500 focus:ring-opacity-25 outline-none rounded-lg">Appointement📅</a>
        </section>
        <section>
          <ul className="md:space-x-8 space-x-6 text-gray-900 font-semibold hidden md:flex">
            <li className="relative group">
              <a href="#" className="group focus:ring focus:ring-amber-500 focus:ring-opacity-25 outline-none rounded-lg"> Home </a>
              <div className="w-full h-0.5 bg-transparent group-hover:bg-amber-500 transition-al absolute bottom-0" />
            </li>
            <li className="relative group">
              <a href="#" className="focus:ring focus:ring-amber-500 focus:ring-opacity-25 outline-none rounded-lg">Appointement</a>
              <div className="w-full h-0.5 bg-transparent group-hover:bg-amber-500 transition-al absolute bottom-0" />
            </li>
            <li><p className="bg-amber-500 px-4 py-1 rounded-xl text-white hover:bg-amber-600 active:bg-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-25 outline-none">Welcome</p></li>
          </ul>
        </section>
      </div>
    </nav>
  )
}


