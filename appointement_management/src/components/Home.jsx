import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
// import Container from '@mui/material'
// import Grid from '@mui/material'
// import Box from '@mui/material'

// import CalendarPicker from '@mui/lab/CalendarPicker'

export const Home = () => {
    return (
        <div className='min-h-screen flex items-stretch '>
            <div className=''>
                <Navbar />
            </div>
            {/* <div className='flex-1 flex justify-center items-center'> */}
                {/* <CalendarPicker/> */}
            {/* </div> */}
            <div className=''>
                <Footer />

                {/* <Container/> */}
            </div>
        </div>
    )

}
