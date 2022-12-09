import React from "react";

class ServiceForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vin: "",
      customer_name: "",
      date: "",
      time: "",
      technician: "",
      technicians: [],
      reason: "",
    }
    this.handleVinChange = this.handleVinChange.bind(this);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleTechnicianChange = this.handleTechnicianChange.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.technicians;
    const serviceUrl = "http://localhost:8080/api/services/"
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(serviceUrl, fetchConfig);
    if (response.ok) {
      const newService = await response.json();
      console.log(newService)

      const cleared = {
        vin: "",
        customer_name: "",
        date: "",
        time: "",
        technician: "",
        reason: "",
      }
      this.setState(cleared)
    }
  }

  async componentDidMount() {
    const url = "http://localhost:8080/api/technicians/"

    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      this.setState({ technicians: data.technician })
    }
  }


  handleVinChange(event) {
    const value = event.target.value
    this.setState({ vin: value })
  }

  handleCustomerChange(event) {
    const value = event.target.value
    this.setState({ customer_name: value })
  }

  handleDateChange(event) {
    const value = event.target.value
    this.setState({ date: value })
  }

  handleTimeChange(event) {
    const value = event.target.value
    this.setState({ time: value })
  }

  handleTechnicianChange(event) {
    const value = event.target.value
    this.setState({ technician: value })
  }

  handleReasonChange(event) {
    const value = event.target.value
    this.setState({ reason: value })
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create Service</h1>
            <form onSubmit={this.handleSubmit} id="create-service-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleVinChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" value={this.state.vin} />
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleCustomerChange} placeholder="Customer" required type="text" name="owner" id="customer" className="form-control" value={this.state.owner} />
                <label htmlFor="customer">Customer</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={this.handleDateChange} placeholder="Date" required type="date" name="date" id="date" className="form-control" value={this.state.date} />
                <label htmlFor="date">Date</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={this.handleTimeChange} placeholder="Time" required type="time" name="time" id="time" className="form-control" value={this.state.time} />
                <label htmlFor="time">Time</label>
              </div>

              <div className="form-floating mb-3">
                <select onChange={this.handleTechnicianChange} required name="technician" id="technician" className="form-select" value={this.state.technician}>
                  <option value="">Choose technician</option>
                  {this.state.technicians.map(technician => {
                    return (
                      <option key={technician.id} value={technician.id}>
                        {technician.technician_name}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleReasonChange} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" value={this.state.reason} />
                <label htmlFor="reason">Reason</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default ServiceForm
