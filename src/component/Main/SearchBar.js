import React, { useState } from 'react'

const SearchBar = ({placeholder, data, setState}) => {
    const [filteredData, setFilteredData] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setSearchWord(searchWord)
        setState(searchWord)
  
        const newFilteredData = data.filter((val)=>{
           return val?val.name.toLowerCase().includes(searchWord.toLowerCase()):"";
        })
    
        if(searchWord !== "" ){
            setFilteredData(newFilteredData);
        }else{
            setFilteredData([])
        }
    }

    // const handleOnBlur = (e) => {
    //     if(searchWord !== "" && filteredData.length>0){
    //         setSearchWord(filteredData[0].name);
    //         setState(filteredData[0].name);
    //         setFilteredData([]);
    //     }else{
    //         setState("");
    //         setSearchWord("");
    //     }
    // }

    const handleOnClick = (e) => {
      setSearchWord(e.target.innerText);
      setState(e.target.innerText);
      setFilteredData([]);
    }

  return (
    <div className='search_bar'>
        <div className='input_field'>
            <input type="text" placeholder={placeholder} value={searchWord} onChange={handleFilter} required/>
        </div>

        {filteredData.length !== 0 && (
        <ul className="search_result">
            
          {filteredData.map((data) => {
            return(
                <button className='location_btn' key={data._id} onClick={handleOnClick}>{data.name}</button>
            ) 
          })}
          
        </ul>
      )}
    </div>
  )
}

export default SearchBar