import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetcher } from '../Utils'


export const Reservations = () => {

  const [token, setToken] = useState('')
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let Token = localStorage.getItem("token");
    setToken(`bearer ${Token}`)
    console.log(Token);
  }, [])

  useEffect(() => {
    if (!token.length == 0) {
      axios.get('http://localhost/app_api/RDV/getMyReservations',
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": `${token}`
          },
        }
      ).then(res => {
        console.log(res.data);
        setReservations(res.data.data);
        setLoading(false)
      })
    }
  }, [token])



  return (
    <>
      <div>
        <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md text-gray-100">
            <div className="px-6 py-4 bg-black border-b border-gray-600 font-bold uppercase">
              My Resrvations
            </div>
            {loading &&
              <CircularProgress />
            }
            {
              !loading ?
                reservations?.map((e, i) => {
                  return (
                    <div key={i} className="p-6 bg-gray-800 border-b border-gray-600">
                      {e.slot == 1 ? '8h' :
                        e.slot == 2 ? '10h' :
                          e.slot == 3 ? '14h' :
                            e.slot == 4 ? '16h' :
                              null} - {e.reserv_date}
                    </div>

                  )
                })
                : reservations.length == 0 && !loading ?
                  <div>
                    no reservations yet create
                    <Link to={`/addApointment`}>
                      One
                    </Link>
                  </div>
                  : null
            }
          </div>
        </div>
      </div>
    </>
  )
}












