import Buses from './component/Buses/Buses';
import Main from './component/Main/Main';
import Details from './component/PassengerDetails/Details';
import { Route, Routes } from 'react-router-dom'
import { MainContextProvider } from './context/MainContext';
import { BusContextProvider } from './context/BusContext';
import SuccessPage from './component/SuccessPage/SuccessPage';
import Header from './component/Header/Header';

function App() {
  
  return (
    <>
    <Header></Header>
    <MainContextProvider>
      <BusContextProvider>
        <Routes>
          <Route path='/' element={<Main />} ></Route>
          <Route path='/buses' element={<Buses />} ></Route>
          <Route path='/details' element={<Details />} ></Route>
          <Route path='/success' element={<SuccessPage />} ></Route>
        </Routes>
      </BusContextProvider>
    </MainContextProvider>
    </>
  );
}

export default App;
