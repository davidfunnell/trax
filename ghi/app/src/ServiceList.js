import React from 'react';


class ServiceList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            appointments: [],
        }
        this.fetchAppointments = this.fetchAppointments.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    componentDidMount() {
        this.fetchAppointments();
    }

    async handleCancel(id) {
        const serviceUrl = `http://localhost:8080/api/service/${id}/`;
        const data = { status: "Cancelled" }
        const fetchConfig = {
            method: "put",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(serviceUrl, fetchConfig);
        if (response.ok) {
            this.fetchAppointments();
        }
    }

    async handleComplete(id) {
        const serviceUrl = `http://localhost:8080/api/service/${id}/`;
        const data = { status: "Finished" }
        const fetchConfig = {
            method: "put",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(serviceUrl, fetchConfig);
        if (response.ok) {
            this.fetchAppointments();
        }
    }

    async fetchAppointments() {
        const response = await fetch('http://localhost:8080/api/service/')
        if (response.ok) {
            const data = await response.json()
            this.setState({ appointments: data.appointments })
        }
    }

    render() {
        return (
            <>
                <div className="mt-3">
                    <h1>Service Appointments</h1>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Vin</th>
                            <th>Customer name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                            <th>Cancel</th>
                            <th>Finished</th>
                            <th>Purchased here</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointments.map(appointment => {
                            if (appointment.status === "Active") {
                                let purchase = ""
                                if (appointment.purchased === true) {
                                    purchase = "Yes - VIP TREATMENT"
                                } else {
                                    purchase = "No"
                                }
                                return (
                                    <tr key={appointment.id}>
                                        <td>{appointment.vin}</td>
                                        <td>{appointment.owner_name}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.time}</td>
                                        <td>{appointment.technician.name}</td>
                                        <td>{appointment.description}</td>
                                        <td><button onClick={() => this.handleCancel(appointment.id)} className="btn btn-danger">Cancel</button></td>
                                        <td><button onClick={() => this.handleComplete(appointment.id)} className="btn btn-success">Finished</button></td>
                                        <td>{purchase}</td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </>

        );
    }
}

export default ServiceList;
