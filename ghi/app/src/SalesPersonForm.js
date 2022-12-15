import React from 'react';

class SalesPersonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      employeeNumber: '',
      created: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmployeeNumberChange = this.handleEmployeeNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    const value = event.target.value;
    this.setState({ name: value, created: false })
  }

  handleEmployeeNumberChange(event) {
    const value = event.target.value;
    this.setState({ employeeNumber: value, created: false })
  }


  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    data.employee_number = data.employeeNumber;
    delete data.employeeNumber;
    delete data.created
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
      const cleared = {
        name: '',
        employeeNumber: '',
        created: true,
      };
      this.setState(cleared)
    }
  }

  render() {
    let messageClasses = 'alert alert-success d-none mb-0';
    let formClasses = '';
    if (this.state.created) {
      messageClasses = 'alert alert-success mt-3 mb-0';
    }
    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a sales person</h1>
              <form className={formClasses} onSubmit={this.handleSubmit} id="create-location-form" >
                <div className="form-floating mb-3">
                  <input value={this.state.name} onChange={this.handleNameChange} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input value={this.state.employeeNumber} onChange={this.handleEmployeeNumberChange} placeholder="employeeNumber" required type="number" name="employeeNumber" id="employeeNumber" className="form-control" />
                  <label htmlFor="employeeNumber">Employee Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
              <div className={messageClasses} id="success-message">
                Congratulations! You created a sales perwson!
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default SalesPersonForm;
