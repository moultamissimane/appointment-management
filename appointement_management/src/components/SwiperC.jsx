import React from 'react'
import {SwiperSlide} from 'swiper/react'


export const SwiperC = () => {
    return (
        <SwiperC id='main'>
            <SwiperSlide>
                <div className="flex flex-col items-center justify-center">
                    <img src={`../public/assets/lapis.jpg`} alt="" />
                    <h1>Slide 1</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center justify-center">
                    <img src={`../public/assets/lion.png`} alt="" />
                    <h1>Slide 2</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center justify-center">
                    <img src={`../public/assets/stepheen.jpg`} alt="" />
                    <h1>Slide 3</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center justify-center">
                    <img src={`../public/assets/lapis.jpg`} alt="" />
                    <h1>Slide 4</h1>
                </div>
            </SwiperSlide>
        </SwiperC>
    )
}
