import React from 'react';

class CustomerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      phoneNumber: '',
      created: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    const value = event.target.value;
    this.setState({ name: value, created: false });
  }

  handleAddressChange(event) {
    const value = event.target.value;
    this.setState({ address: value, created: false });
  }

  handlePhoneNumberChange(event) {
    const value = event.target.value;
    this.setState({ phoneNumber: value, created: false });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    data.phone_number = data.phoneNumber;
    delete data.phoneNumber;
    delete data.created;
    const customerUrl = 'http://localhost:8090/api/customers/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(customerUrl, fetchConfig);
    if (response.ok) {
      const cleared = {
        name: '',
        address: '',
        phoneNumber: '',
        created: true,
      };
      this.setState(cleared);
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
            <h1>Create a new customer</h1>
            <form onSubmit={this.handleSubmit} id="create-customer-form">
              <div className="form-floating mb-3">
                <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input value={this.state.address} onChange={this.handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                <label htmlFor="address">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} placeholder="Phone Number" required type="text" name="phoneNumber" id="phoneNumber" className="form-control" />
                <label htmlFor="phoneNumber">Phone Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
            <div className={messageClasses} id="success-message">
              Congratulations! You created a new customer!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CustomerForm;
