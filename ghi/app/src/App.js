import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutomobileForm from './AutomobileForm';
import AutomobileList from './AutomobileList';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';
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
          <Route path="inventory">
            <Route path="automobiles" element={<AutomobileList />}/>
            <Route path="automobile_form" element={<AutomobileForm />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
