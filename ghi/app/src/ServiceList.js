import React from 'react';


class ServiceList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            appointments: [],
        }
        this.fetchAppointments = this.fetchAppointments.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.fetchAppointments();
    }

    async handleDelete(id){
        const serviceUrl = `http://localhost:8080/api/service/${id}/`;
        const fetchConfig = {
          method: "delete",
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(serviceUrl, fetchConfig);
        if (response.ok) {
          const deleteService = await response.json();
          console.log(deleteService);
          this.fetchAppointments();
        }
    }

    async fetchAppointments() {
        const response = await fetch('http://localhost:8080/api/service/')
        if (response.ok) {
            const data = await response.json()
            this.setState({appointments: data.appointments})
        }
    }

    render() {
        return (
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
                        let purchase = ""
                        if(appointment.purchased === true){
                            purchase = "Yes"
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
                                <td><button onClick={() => this.handleDelete(appointment.id)} className="btn btn-danger">Cancel</button></td>
                                <td><button onClick={() => this.handleDelete(appointment.id)} className="btn btn-success">Finished</button></td>
                                <td>{purchase}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

    );
    }
}

export default ServiceList;
