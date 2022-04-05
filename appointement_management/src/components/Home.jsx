import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import {AddAppointment} from './AddAppointment'       
import { AvAppointment } from './AvAppointment'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import SwipeCore from 'swiper'
// import 'swiper/swiper-bundle.css'



export const Home = () => {

    return (
        <div className='min-h-screen flex items-stretch '>
            <div className=''>
                <Navbar />
                <AvAppointment/>
                

                <Footer />
            </div>
        </div>
    )

}
