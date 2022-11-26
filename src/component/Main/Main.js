import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import SearchBar from './SearchBar';
import 'react-datepicker/dist/react-datepicker.css';
import './Main.css';
import { useNavigate } from 'react-router-dom';
import { useMainContext } from '../../context/MainContext';
import { useBusContext } from '../../context/BusContext';
import { HOST_URL } from '../Constants/constants';

const Main = () => {
    const {setSource, setDestination, selectedDate, setSelectedDate, source, destination} = useMainContext();
    const [ locationNames, setLocationNames ] = useState([])
    const {buses, setBuses} = useBusContext();
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {   
        e.preventDefault();
        (async ()=>{
          await getBusDetails();
        })();
        
        navigate('/buses')
    }

    const getBusDetails = async () => {
        const url = new URL(HOST_URL+'bus')
        const params = {source: source, destination: destination};
        url.search = new URLSearchParams(params).toString();
        console.log(url)
        const result = await fetch(url);
        const busData = await result.json();

        setBuses(busData)
        console.log(busData)
        return busData;
    }

  
    useEffect(()=>{
        const getLocationNames = async () => {
            const response = await fetch(HOST_URL+'location')
            const data = await response.json()
            setLocationNames(data)
        }
        getLocationNames()
        
    }, [])

    // const data=[{"key":"1","value":"theni"}, {"key":"2","value":"tamilnadu"}, {"key":"3","value":"indis"}]
    
  return (
    <div className='image-div'>
        <form onSubmit={handleSubmit} className="main_form">
            <div className='input_from input_main'>
                <SearchBar placeholder="FROM" data={locationNames} setState={setSource}/>
            </div>
            <div className='input_to input_main'>
                <SearchBar placeholder="TO" data={locationNames} setState={setDestination}/>
            </div>
            <div className='input_date input_main'>
                <DatePicker 
                    selected={selectedDate} 
                    onChange={(date)=>{
                        setSelectedDate(date);
                    }} 
                    minDate={new Date()} 
                    placeholderText={"DD/MM/YYYY"}
                    required={true}
                    className='date_field'
                    >
                </DatePicker>
            </div>
            <div className='input_button input_main'>
                <button type="submit">SEARCH</button>
            </div>
        </form>
    </div>
  )
}

export default Main