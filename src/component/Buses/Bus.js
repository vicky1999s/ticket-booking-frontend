import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bus.css'

const Bus = ({bus}) => {
    const navigate = useNavigate()
    var totalSeats = 1;

    const handleChange = (e) => {
        totalSeats = e.target.value
    }

    const toPassengerDetail = () => {
        navigate('/details', {state:{bus:bus, noOfSeats:totalSeats}})
    }

    const options = [];
    for(let i=1;i<=bus.seats_available;i++){
        options.push(<option key={i} value={i}>{i}</option>)
    }

  return (
    <div className='bus-div'>
        <div className='bus'>
            <div className='travels_name bold'>{bus.travels_name}</div>
            <div className='departure'>
                <div className='bold'>{bus.departure_time}</div>
                <div>{bus.departure_location}</div>
            </div>
            <div className='duration'>{bus.duration}</div>
            <div className='arrival'>
                <div className='arrival_time'>{bus.arrival_time}</div>
                <div>{bus.arrival_location}</div>
            </div>
            <div className='ratings_div'>
                <div className='ratings'>⭐{bus.ratings} Rating</div>
            </div>
            <div className='fare'>Rs.<span className='bold'>{bus.fare} </span></div>
            <div className='seats'><span className='italic'>{bus.seats_available}</span>seats available</div>
        </div>
        <div className='book_btn'>
            <label>total seats:</label>
            <select className='seat_selection' defaultValue={1} onChange={handleChange}>
                {options}
            </select>
            <button onClick={()=>{toPassengerDetail()}} className='btn'>BOOK NOW</button>
        </div>
    </div>
  )
}

export default Bus