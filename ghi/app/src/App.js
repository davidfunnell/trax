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
  constructor(props) {
    super(props);
    this.state = {
      salesRecords: [],
      manufacturers: [],
      models: [],
      salesPersons: [],
    };
  }

  async componentDidMount() {
    fetch('http://localhost:8100/api/manufacturers/')
      .then(manufacturers => manufacturers.json())
      .then(manufacturers => this.setState(manufacturers))
    fetch('http://localhost:8100/api/models/')
      .then(models => models.json())
      .then(models => this.setState(models))
    fetch('http://localhost:8090/api/salerecords/')
      .then(salesRecords => salesRecords.json())
      .then(salesRecords => {
        this.setState({ salesRecords: salesRecords.sales })
      })
    fetch('http://localhost:8090/api/sales_persons/')
      .then(salesPersons => salesPersons.json())
      .then(salesPersons => {
        this.setState({ salesPersons: salesPersons.sales_persons })
      })
  }

render() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='manufacturers/'>
            <Route path='new/' element={<ManufacturerForm />} />
            <Route path='' element={<ManufacturerList manufacturerList={this.state.manufacturers} />} />
          </Route>
          <Route path='models/'>
            <Route path='new/' element={<ModelForm />} />
            <Route path='' element={<ModelList modelList={this.state.models} />} />
          </Route>
          <Route path='salerecords/'>
            <Route path='new/' element={<SaleRecordForm />} />
            <Route path='' element={<SalesList salesList={this.state.salesRecords} />} />
            <Route path='filter/' element={<SaleRecordsFiltered salesRecords={this.state.salesRecords} salesPersons={this.state.salesPersons} />} />
          </Route>
          <Route path='salespersons/new' element={<SalesPersonForm />} />
          <Route path='customers/new' element={<CustomerForm />} />
          <Route path="service">
            <Route path="technician" element={<TechnicianForm />} />
            <Route path="appointment" element={<ServiceForm />} />
            <Route path="all_appointments" element={<ServiceList />} />
            <Route path="vin_appointments" element={<ServiceVinList />} />
          </Route>
          <Route path="inventory">
            <Route path="automobiles" element={<AutomobileList />} />
            <Route path="automobile_form" element={<AutomobileForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
}

