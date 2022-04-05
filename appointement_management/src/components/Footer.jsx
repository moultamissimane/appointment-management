import React from 'react'
import {RiFacebookBoxFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export const Footer = () => {
  return (


    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">Keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us now, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 " >
              <button className="bg-white text-blue-700 shadow-lg font-normal h-10 w-10 p-3 rounded-full outline-none focus:outline-none mr-2" type="button">
                <RiFacebookBoxFill/>
              </button>
              <button className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items p-3 rounded-full outline-none focus:outline-none mr-2" type="button">
                <BsTwitter/>
              </button>
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items p-3 rounded-full outline-none focus:outline-none mr-2" type="button">
                <BsDribbble/>
              </button>
              <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items p-3 rounded-full outline-none focus:outline-none mr-2" type="button">
                <BsGithub/>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-indigo-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul>
                  <li>
                    <a className="text-indigo-900 hover:text-indigo-600 font-semibold block pb-2 text-sm" href="#">About Us</a>
                  </li>
                  <li>
                    <a className="text-indigo-900 hover:text-indigo-600 font-semibold block pb-2 text-sm" href="#">Blog</a>
                  </li>
                  <li>
                    <a className="text-indigo-900 hover:text-indigo-600 font-semibold block pb-2 text-sm" href="#">Github</a>
                  </li>
                  <li>
                    <a className="text-indigo-900 hover:text-indigo-600 font-semibold block pb-2 text-sm" href="#">Free Products</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2022</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

