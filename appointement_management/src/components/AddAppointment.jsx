import React, { useEffect } from "react";
import { BiCalendarPlus } from "react-icons/bi";
import { useState } from 'react';
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import { TrendingUpRounded } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";

export const AddAppointment = ({ onSendAppointment, lastId }) => {


    const initialSlots = [
        {
            slot: 1,
            time: "08:00",
            isAvailable: true
        },
        {
            slot: 2,
            time: "10:00",
            isAvailable: true
        },
        {
            slot: 3,
            time: "14:00",
            isAvailable: true
        },
        {
            slot: 4,
            time: "16:00",
            isAvailable: true
        },
    ]

    // setIsLoading is a function that lets you set the value of the state variable 
    const [isLoading, setIsLoading] = useState(false)
    const [date, setDate] = useState('')
    const [slots, setSlots] = useState(initialSlots)

    const handleReservation = async (slot) => {
        setIsLoading(true)
        // axios.post is http request to post data to the server
        axios.post('http://localhost/app_api/RDV/add', {
            // we can access to them from the client side
            reserv_date: date,
            slot: slot
        }, {
            headers: {
                'Content-Type': 'application/json',
                // getItem used to get the token from local storage
                //localStorage allows to save data as key-value pairs in the browser for later use
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data);
            setIsLoading(false)
            handleGetReservations()
        }
        )
    }

    const handleGetReservations = async () => {
        setIsLoading(true)
        slots.map(slot => {
            slot.isAvailable = true
        }
        )
        axios.get('http://localhost/app_api/RDV/RDVs/' + date).then
            (res => {
                console.log(res.data);
                res?.data?.map(_ => {
                    slots[_.slot - 1].isAvailable = false
                }
                )
                setSlots(slots)
                setIsLoading(false)
                console.log(slots);
            }
            )
    }

    // making sure that the state variable date is updated
    useEffect(() => {
        console.log(date);
        if (date !== '') {
            handleGetReservations()
        }
    }, [date])





    return (
        <div className="flex justify-center w-full h-screen bg-amber-50">
            <div className="p-10 mx-10 my-10 pb-32">
                <Link to="/reservations">
                    <button className="text-white bg-black rounded m-4 p-2 ml-5">go</button>
                </Link>
                <div
                    className="bg-amber-500  text-white text-lg px-10 py-3 w-full text-left rounded-t-md">
                    <div><BiCalendarPlus className="inline-block align-text-top text-md" /> Search for an Appointment</div>
                </div>
                <div className="border-r-2 border-b-2 bg-white border-l-2 rounded-b-md p-4">
                    <div className="flex gap-3">
                        <motion.input
                            whileTap={{
                                scale: 0.95,
                            }}
                            onChange={(e) => setDate(e.target.value)}
                            type="date" className="shadow-md outline-none rounded-md p-3 w-full" />
                        <motion.button
                            whileTap={{
                                scale: 0.9,
                            }}
                            className="bg-amber-500 px-3 rounded-md" >Search</motion.button>
                    </div>
                    <div className="flex mt-3 flex-col gap-3" >

                        {isLoading ? <div className="w-full flex justify-center">
                            <CircularProgress />
                        </div> : null}
                        {
                            slots?.map((_, index) => {
                                return (
                                    <div key={index} className="flex rounded-md justify-between border-l-[6px] border-solid border-orange-600 bg-slate-100 p-3  gap-3">
                                        <span>
                                            {_.time}
                                        </span>
                                        {
                                            _.isAvailable ?
                                                <motion.button
                                                    whileTap={{
                                                        scale: 0.9,
                                                    }}
                                                    onClick={() => handleReservation(_.slot)}

                                                    className="bg-green-500 h-full px-3 rounded-md" >Book</motion.button>
                                                :
                                                <motion.button
                                                    whileTap={{
                                                        scale: 0.9,
                                                    }}

                                                    className="bg-yellow-500 h-full px-3 rounded-md" >Reserved</motion.button>
                                        }
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
