import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutomobileForm from './inventory/AutomobileForm';
import AutomobileList from './inventory/AutomobileList';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './salesFiles/SalesPersonForm';
import CustomerForm from './salesFiles/CustomerForm';
import SaleRecordForm from './salesFiles/SaleRecordForm';
import SalesList from './salesFiles/SalesList';
import ManufacturerForm from './inventory/ManufacturerForm';
import ManufacturerList from './inventory/ManufacturerList';
import ModelForm from './inventory/ModelForm';
import ModelList from './inventory/ModelList';
import SaleRecordsFiltered from './salesFiles/SaleRecordsFiltered';
import ServiceForm from './serviceFiles/ServiceForm';
import ServiceList from './serviceFiles/ServiceList';
import ServiceVinList from './serviceFiles/ServiceVinList';
import TechnicianForm from './serviceFiles/TechnicianForm';
import DataList from './serviceData/DataList';

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
          <Route path="data">
            <Route path="services" element={<DataList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
}
