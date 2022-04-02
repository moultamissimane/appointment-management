import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { getUser, getToken } from '@utils/index.js'
import lottie from "lottie-web"
import booking from '../../public/booking.json'
import { AppLottie } from './AppLottie'



export const CreateUser = () => {


    const [inputs, setInputs] = useState({})
    const navigate = useNavigate()

    const [snackBarMessage, setSnackBarMessage] = useState('')
    const [snackBarOpen, setSnackBarOpen] = useState(false)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({
            ...values,
            [name]: value
        }))
    }

    useEffect(async () => {
        let user = await getUser()
        let token = getToken()
        if (user) {
            console.log(user, token)
        }
    }, [])

    const handleClose = () => {
        setSnackBarOpen(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        setIsLoading(true)
        axios.post('http://localhost/app_api/user/login', inputs)
            .then(res => {
                console.log(res.data.Token)
                setIsLoading(false)
                localStorage.setItem('token', res.data.Token)
                localStorage.setItem('user', JSON.stringify(res.data.User))
                if (res.data.Token) {
                    setSnackBarMessage('Register Successful')
                    setSnackBarOpen(true)
                    setTimeout(() => {
                        navigate('/qsd')
                    }, 1000)
                }
                else {
                    setSnackBarMessage('Register Failed')
                    setSnackBarOpen(true)
                }
            }
            )
    }

    const [isLoading, setIsLoading] = useState(false)

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <motion.div classNameName='min-h-screen bg-cyan-600'>
            <div className="flex flex-col md:flex-row h-1/2 items-center">
                <div className="bg-white hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <div>
                        <div className="flex justify-center">
                        <AppLottie />
                        </div>
                    </div>

                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                    <div className="w-full ">

                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create Account For Free🤑</h1>

                        <form className="mt-6" method="POST"
                            onSubmit={handleSubmit}>
                                <div>
                                <label className="block text-gray-700">First Name</label>
                                <input
                                    onChange={handleChange}
                                    type="text" name="f_name" id="" placeholder="Enter First Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Last Name</label>
                                <input
                                    onChange={handleChange}
                                    type="text" name="l_name" id="" placeholder="Enter Last Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input
                                    onChange={handleChange}
                                    type="email" name="email" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input
                                    onChange={handleChange}
                                    type="password" name="password" id="" placeholder="Enter Password" minLength="2" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                            </div>

                            <button
                                type="submit" className="w-full block bg-amber-500 hover:bg-amber-600 focus:bg-indigo-400 text-white font-semibold rounded-lg  px-4 py-3 mt-6">Create Account</button>
                        </form>
                        <p className="mt-8">Already have an account? <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold">Login Here😎</a></p>
                    </div>
                </div>

            </div>
            {
                snackBarOpen &&
                <Snackbar
                    open={true}
                    autoHideDuration={6000}
                    message={snackBarMessage}
                    onClose={() => setSnackBarOpen(false)}
                    action={action}
                    severity="warning"
                />
            }
        </motion.div >

    )
}
