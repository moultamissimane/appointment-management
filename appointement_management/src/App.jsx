
import  React from 'react'
import { Route, Routes } from "react-router-dom"
// import {AddReservation} from "./public/pages/AddReservation"
import {Home} from "./components/Home"
import {Login} from "./components/Login"
import { CreateUser } from "./components/CreateUser"
import { AddAppointment } from './components/AddAppointment'



export const App = ()=>{
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      {/* <Route path="/AddReservation" element={<AddReservation />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/CreateUser" element={<CreateUser />} />
      <Route path="/AddAppointment" element={<AddAppointment />} />
      {/* <Route path="/AppLottie" element={<AppLottie />} /> */}
    </Routes>
  )
}
