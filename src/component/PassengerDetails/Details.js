import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HOST_URL } from '../Constants/constants'
import PassengerDetail from './PassengerDetail'
import "./PassengerDetail.css"

const Details = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const totalSeats = location.state.noOfSeats
    let busDetail = location.state.bus
    let passengerNames = [];

    const reduceNoOfSeats = async () => {
        busDetail.seats_available = busDetail.seats_available-totalSeats;
        console.log(HOST_URL+'bus/'+busDetail._id);
        console.log(JSON.stringify(busDetail));
        const response = await fetch(HOST_URL+'bus/'+busDetail._id, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(busDetail)
        })
        const res = await response.json()
        console.log(res)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        let k = 0;
        for(let i=0;i<(e.target.length-1)/4;i++){
            passengerNames.push(e.target[k].value)
            k+=4
        }

        (async ()=>{
            await reduceNoOfSeats()
        })();
        navigate("/success", {replace: true, state:{busDetail:busDetail, totalSeats:totalSeats, passengerNames:passengerNames}})
    }

    const passengers = []
    for(let i=1;i<=totalSeats;i++){
        passengers.push(<PassengerDetail key={i} val={i} />)
    }
  return (
    <div className='passengers_block'>
        <form onSubmit={handleOnSubmit} className='passengers_form'>
            {passengers}
            <div className='submit_btn' >
                <button className='btn' >Proceed to Book</button>
            </div>
        </form>
    </div>
  )
}

export default Details