import React from 'react'
import "./PassengerDetail.css";

const PassengerDetail = ({val}) => {
    // const [passengerList, setPassengerList] = useState(1);
    // const handleOnSubmit = (e) => {
    //     console.log(e)
    // }
  return (
    <div className='passenger_detail'>
        <div className='passenger'>Passenger {val}</div>
        <div className='name_block'>
            <label>Name</label>
            <input type="text" required={true} placeholder="Name"/>
        </div>
        <div className='second_block'>
            <div className='radio_block'>
                <div>Gender</div>
                <div className='radio_options'>
                    <div className='option'>
                        <input type="radio" name={val} required={true}/>
                        <label>Male</label>
                    </div>
                    <div className='option'>
                        <input type="radio" name={val} required={true}/>
                        <label>Female</label>      
                    </div>
                </div>
                
            </div>

            <div className='age_block'>
                <div>Age</div>
                <input type="number" placeholder='Age' required={true}/>
            </div>
        </div> 

    </div>
  )
}

export default PassengerDetail