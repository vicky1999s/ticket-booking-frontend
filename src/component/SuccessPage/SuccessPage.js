import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useMainContext } from '../../context/MainContext'
import { HOST_URL } from '../Constants/constants'
import "./SuccessPage.css"

const SuccessPage = () => {

    const [hiddenText, setHiddenText] = useState(true)
    const [emailAlreadySent, setEmailAlreadySent] = useState(false)

    const location = useLocation()
    const {selectedDate} = useMainContext()
    let date = new Date(selectedDate)
    const busDetail = location.state.busDetail
    const totalSeats = location.state.totalSeats
    const passengerNames = location.state.passengerNames
    
    
    const handleSendEmail = (e) => {
        e.preventDefault();
        setHiddenText(false);
        (async ()=>{
            if(!emailAlreadySent)
                await sendEmail(e);
            else 
                alert("Email already sent")
        })();
        setEmailAlreadySent(false);
        console.log(e);
    }

    const sendEmail = async (e) => {
        console.log(e.target[0].value)
        const data = {
            email_id: e.target[0].value,
            travels_name: busDetail.travels_name,
            total_passengers: passengerNames.length,
            passenger_names: passengerNames.join(", "),
            departure_time: busDetail.departure_time,
            departure_location: busDetail.departure_location,
            arrival_time: busDetail.arrival_time,
            arrival_location: busDetail.arrival_location,
            duration: busDetail.duration,
            total_fare: passengerNames.length*busDetail.fare,
        }
        const response = await fetch(HOST_URL + 'email', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const ret = await response.json()
        console.log(ret)
    }

  return (
    <div className="box">
        <div className='container'>
            <div className='time_detail'>
                <div>{date.getDate()}-{date.getMonth()}-{date.getFullYear()}</div>
                <div className='travels_name'>Travels: {busDetail.travels_name}</div>
                <div>{busDetail.departure_location.toUpperCase()} - {busDetail.arrival_location.toUpperCase()}</div>
            </div>
            <div className='bus_detail'>
                <div className='confirmed'>CONFIRMED</div>
                
                <div className='ticket_id'>TicketId: 12333211231</div>
            </div>
            <div className='departure_detail'>
                <div className='boarding'>
                    <div>BOARDING</div>
                    <div className='bold'>{busDetail.departure_location.toUpperCase()}</div>
                </div>
                <div className='departure'>
                    <div>ARRIVAL</div>
                    <div className='bold'>{busDetail.departure_time}</div>
                </div>
                <div className='passengers'>
                    <div>PASSENGERS</div>
                    <div className='bold names'>{
                        passengerNames.map((name)=>{
                            return <span key={name} className='passengerNames'>{name}</span>
                        })
                    }</div>
                </div>
                <div className='drop_off'>
                    <div>DROP OFF</div>
                    <div className='bold'>{busDetail.arrival_location.toUpperCase()}</div>
                </div>
            </div>
        </div>

        <div className='email_div'>
            <form className='email_form' onSubmit={handleSendEmail}>
                <input type="email" placeholder='Enter your email'/>
                <button className='btn'>Send Tickets</button>
                <div className={hiddenText?"hidden":""}>Tickets send successfully✔</div>
            </form>
        </div>

        <div className='home_btn'>
            <Link to="/">
                <button>BACK TO HOME</button>
            </Link>
        </div>
    </div>
  )
}

export default SuccessPage