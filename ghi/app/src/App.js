import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutomobileForm from './AutomobileForm';
import AutomobileList from './AutomobileList';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import SaleRecordForm from './SaleRecordForm';
import SalesList from './SalesList';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import ModelForm from './ModelForm';
import ModelList from './ModelList';
import SaleRecordsFiltered from './SaleRecordsFiltered';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';
import ServiceVinList from './ServiceVinList';
import TechnicianForm from './TechnicianForm';

export default class App extends Component {
render() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='sales'>
            <Route path='sales_form' element={<SaleRecordForm />} />
            <Route path='all_sales' element={<SalesList />} />
            <Route path='filter_sales' element={<SaleRecordsFiltered/>} />
            <Route path='salesperson_form' element={<SalesPersonForm />} />
            <Route path='customer_form' element={<CustomerForm />} />
          </Route>
          <Route path="service">
            <Route path="technician" element={<TechnicianForm />} />
            <Route path="appointment" element={<ServiceForm />} />
            <Route path="all_appointments" element={<ServiceList />} />
            <Route path="vin_appointments" element={<ServiceVinList />} />
          </Route>
          <Route path="inventory">
            <Route path="automobile_form" element={<AutomobileForm />} />
            <Route path="automobiles" element={<AutomobileList />} />
            <Route path="model_form" element={<ModelForm />} />
            <Route path="models" element={<ModelList />} />
            <Route path="manufacturer_form" element={<ManufacturerForm />} />
            <Route path="manufacturers" element={<ManufacturerList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
}
