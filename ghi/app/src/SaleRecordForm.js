import React from 'react';

export default class SaleRecordForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: '',
      sales_persons: [],
      sales_person: '',
      customers: [],
      customer: '',
      automobiles: [],
      automobile: '',
      created: false,
    };
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchInformation = this.fetchInformation.bind(this);
    this.updateSold = this.updateSold.bind(this);
  }

  handlePriceChange(event) {
    const value = event.target.value;
    this.setState({ price: value, created: false });
  }

  handleSalesPersonChange(event) {
    const value = event.target.value;
    this.setState({ sales_person: value, created: false });
  }

  handleCustomerChange(event) {
    const value = event.target.value;
    this.setState({ customer: value, created: false });
  }

  handleAutomobileChange(event) {
    const value = event.target.value;
    this.setState({ automobile: value, created: false });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.sales_persons;
    delete data.automobiles;
    delete data.customers;
    delete data.created;
    const salesUrl = 'http://localhost:8090/api/salerecords/';
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(salesUrl, fetchConfig);
    if (response.ok) {
      this.updateSold(data.automobile)

      const cleared = {
        price: '',
        sales_person: '',
        customer: '',
        automobile: '',
        created: true,
      };
      this.setState(cleared);
    }
  }

  async updateSold(id) {
    const serviceUrl = `http://localhost:8090/api/autos/${id}`;
    const data = { sold: true }
    const fetchConfig = {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(serviceUrl, fetchConfig);
    if (response.ok) {
      this.fetchInformation();
    }
  }

  componentDidMount() {
    this.fetchInformation();
  }

  async fetchInformation() {
    const inventoryUrl = 'http://localhost:8090/api/autos';
    const response = await fetch(inventoryUrl);
    if (response.ok) {
      const data = await response.json();
      this.setState({ automobiles: data.automobiles });
    }
    const salesPersonUrl = 'http://localhost:8090/api/sales_persons';
    const response2 = await fetch(salesPersonUrl);
    if (response2.ok) {
      const data = await response2.json();
      this.setState({ sales_persons: data.sales_persons });
    }
    const customerUrl = 'http://localhost:8090/api/customers';
    const response3 = await fetch(customerUrl);
    if (response3.ok) {
      const data = await response3.json();
      this.setState({ customers: data.customers });
    }
  }

  render() {
    let messageClasses = 'alert alert-success d-none mb-0';
    if (this.state.created) {
      messageClasses = 'alert alert-success mt-3 mb-0';
    }
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new sale</h1>
            <form onSubmit={this.handleSubmit} id="create-sale-form">
              <div className="mb-3">
                <select onChange={this.handleCustomerChange} value={this.state.customer} required id="customers" name="customers" className="form-select">
                  <option value="">Customer</option>
                  {this.state.customers.map(customer => {
                    return (
                      <option key={customer.id} value={customer.id}>
                        {customer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={this.handleSalesPersonChange} value={this.state.sales_person} required id="sales_persons" name="sales_persons" className="form-select">
                  <option value="">Sales Person</option>
                  {this.state.sales_persons.map(sales_person => {
                    return (
                      <option key={sales_person.id} value={sales_person.id}>
                        {sales_person.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={this.handleAutomobileChange} value={this.state.automobile} required id="automobiles" name="automobiles" className="form-select">
                  <option value="">Automobile</option>
                  {this.state.automobiles.map(automobile => {
                    return (
                      <option key={automobile.id} value={automobile.id}>
                        vin: {automobile.vin} - Model: {automobile.model} - Manufacturer: {automobile.manufacturer}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handlePriceChange} value={this.state.price} placeholder="price" required type="text" name="price" id="price" className="form-control" />
                <label htmlFor="price">Price</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
            <div className={messageClasses} id="success-message">
              Congratulations! You created a sale!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
