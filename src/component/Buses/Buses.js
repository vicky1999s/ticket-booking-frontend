import React from 'react';
import { useBusContext } from '../../context/BusContext';
import { useMainContext } from '../../context/MainContext';
import Bus  from './Bus';
import './Bus.css'

const Buses = () => {
    const {source, destination} = useMainContext()
    const {buses, setBuses} = useBusContext()
    console.log(buses)
    const default_bus = {
      travels_name: "Default",
      departure_time: "01:00",
      departure_location: source,
      duration: "12h 25m",
      arrival_time: "13:25",
      arrival_location: destination,
      ratings: "3.5",
      fare: "180",
      source: source,
      destination: destination,
      seats_available: "50"
  };
    
  return (
    <div className='buses'>
      <ul className='col_names'>
        <li>Departure</li>
        <li>Duration</li>
        <li>Arrival</li>
        <li>Ratings</li>
        <li>Fare</li>
        <li>seats available</li>
      </ul>
     {buses.length===0 ? 
          (<Bus key={default_bus.travels_name} bus={default_bus}/>)
          :
          (
           buses.map((bus)=>{
            console.log(bus)
              
                return <Bus key={bus.travels_name} bus={bus}/>
              })
            
          )
    }
          
    </div>
    
  )
}

export default Buses