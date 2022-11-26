import React, { createContext, useContext, useState } from "react";

const MainContext = createContext()

export const MainContextProvider = ({children}) => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    
  return (
    <MainContext.Provider value={{source, setSource, destination, setDestination, selectedDate, setSelectedDate}}>
        {children}
    </MainContext.Provider>
  )
}


export const useMainContext = () => useContext(MainContext)