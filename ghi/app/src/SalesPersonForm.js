import React from 'react';

class SalesPersonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      employeeNumber: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmployeeNumberChange = this.handleEmployeeNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    const value = event.target.value;
    this.setState({name: value});
  }

  handleEmployeeNumberChange(event) {
    const value = event.target.value;
    this.setState({employeeNumber: value});
  }


  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    data.employee_number = data.employeeNumber;
    delete data.employeeNumber;

    const salesPersonUrl = 'http://localhost:8090/api/sales_persons/';
    const fetchConfig= {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const response = await fetch(salesPersonUrl, fetchConfig);
    if (response.ok) {
      const newSalesPerson = await response.json();
      console.log(newSalesPerson);
    }

      const cleared = {
        name: '',
        employeeNumber: '',
      };

      this.setState(cleared)

  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a sales person</h1>
            <form onSubmit={this.handleSubmit} id="create-sales-person-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleNameChange} placeholder="Name" value={this.state.name} required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleEmployeeNumberChange} placeholder="Employee ID" value={this.state.employeeNumber} required type="number" name="employee_number" id="employee_number" className="form-control" />
                <label htmlFor="employee_number">Employee Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SalesPersonForm;

