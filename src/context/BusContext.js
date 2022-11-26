import { createContext, useContext, useState } from "react";

const BusContext = createContext()

export const BusContextProvider = ({children}) => {
    const [buses, setBuses] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState(1)
    const [selectedBus, setSelectedBus] = useState('')
    return(
        <BusContext.Provider value={{buses, setBuses, selectedSeats, setSelectedSeats, selectedBus, setSelectedBus}}>
            {children}
        </BusContext.Provider>
    )
}

export const useBusContext = () => useContext(BusContext)