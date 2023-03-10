import React from 'react';


class ServiceVinList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: "",
            appointments: [],
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }


    handleSearchChange(event) {
        const value = event.target.value;
        this.setState({ vin: value })
    }

    async handleSearch(event) {
        event.preventDefault();
        const vinUrl = `http://localhost:8080/api/service/${this.state.vin}/vin/`;
        const response = await fetch(vinUrl)
        if (response.ok) {
            const data = await response.json()
            this.setState({ appointments: data.appointments })
        }
    }


    render() {
        return (
            <>
                <div className="mt-3">
                    <h1>Service Appointment History</h1>
                </div>
                <div className="row">
                    <div className="offset-3 col-6">
                        <form onSubmit={this.handleSearch} id="create-location-form" className="mt-3">
                            <div className="form-floating mb-3">
                                <input value={this.state.vin} onChange={this.handleSearchChange} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                                <label htmlFor="vin">Search by Vin</label>
                            </div>
                            <button className="btn btn-primary">Search</button>
                        </form>
                    </div>
                </div>
                <table className="table table-striped mt-2">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointments.map(appointment => {
                            return (
                                <tr key={appointment.id}>
                                    <td>{appointment.owner_name}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.technician.name}</td>
                                    <td>{appointment.description}</td>
                                    <td>{appointment.status}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>

        );
    }
}

export default ServiceVinList;
