import { React, useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
// import { AddAppointment } from './AddAppointment'





export const AvAppointment = () => {
    return (
        <div className="py-16 bg-amber-100">
            <div className="container m-auto px-6 md:px-12 xl:px-0">
                <h1 className='flex justify-center text-4xl text-bold text-slate-900'>Book Your Reservation Here</h1>
                <div className=" flex justify-center mt-5 md:w-3/4 lg:w-full lg:grid-cols-3">
                    <div className="bg-white rounded-2xl w-1/2 shadow-xl  sm:px-12 lg:px-8">
                        <div className=" flex flex-wrap mb-12 space-y-4">
                            <img className='w-80 h-80' src="../public/assets/Cardiologist-rafiki.png" alt="cardiologist_image" />
                            <div className='flex-wrap justify-center mb-24  '>
                                <p className='text-black font-bold text-lg pt-16 pb-10'>Click Go to see Reservation</p>
                                <motion.input
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                    
                                    type="date" className="shadow-md outline-none rounded-md p-3 w-full" />
                                <div className='flex justify-center'>
                                    <Link to="/AddAppointment">
                                        <button className='w-1/3 block bg-amber-500 hover:bg-amber-600 focus:bg-amber-600 text-white font-semibold rounded-lg  px-4 py-3 mt-6 '>Go
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



