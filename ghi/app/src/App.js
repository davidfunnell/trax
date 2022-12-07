import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';
// import ServicePage from './ServicePage';
import ServiceVinList from './ServiceVinList';
import TechnicianForm from './TechnicianForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="service">
            <Route path="technician" element={<TechnicianForm />}/>
            <Route path="appointment" element={<ServiceForm />}/>
            <Route path="all_appointments" element={<ServiceList />}/>
            <Route path="vin_appointments" element={<ServiceVinList />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
