import React from 'react';


class DataList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            appointments: [],
            mostFrequentServices: {},
            purchasedHere: {},
            brandMostServiced: {},
            modelMostServiced: {},

        }
        this.fetchAppointments = this.fetchAppointments.bind(this);
    }

    componentDidMount() {
        this.fetchAppointments();
    }


    async fetchAppointments() {
        const response = await fetch('http://localhost:8080/api/service/')
        if (response.ok) {
            const data = await response.json()
            let mostFrequentService = {}
            let brandMostServiced = {}
            let modelMostServiced = {}
            let purchased = {purchasedHere:0, notPurchasedHere:0};
            for(let x of data.appointments){
                if(mostFrequentService[x["description"]] === undefined){
                    mostFrequentService[x["description"]] = 0
                }
                mostFrequentService[x["description"]]++

                if(x["purchased"] === true){
                    purchased["purchasedHere"]++
                } else {
                    purchased["notPurchasedHere"]++
                }

                if(x["manufacturer"] !== null){
                    if(brandMostServiced[x["manufacturer"]] === undefined){
                        brandMostServiced[x["manufacturer"]] = 0
                    }
                    brandMostServiced[x["manufacturer"]]++
                }
                if(x["model"] !== null){
                    if(modelMostServiced[x["model"]] === undefined){
                        modelMostServiced[x["model"]] = 0
                    }
                    modelMostServiced[x["model"]]++
                }
            }
            this.setState({ modelMostServiced: modelMostServiced })
            this.setState({ brandMostServiced: brandMostServiced })
            this.setState({ purchasedHere: purchased })
            this.setState({ mostFrequentServices: mostFrequentService })
            this.setState({ appointments: data.appointments })
        }
    }

    render() {
        return (
            <>
                <div className="mt-5">
                    <h2>Service Appointment Frequency</h2>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Service description</th>
                            <th>Number of times performed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(this.state.mostFrequentServices).map(([key, value]) => {
                            return(
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="mt-5">
                    <h2>Vehicle Purchased Here</h2>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Was the vehicle purchased here?</th>
                            <th>Number of appointments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(this.state.purchasedHere).map(([key, value]) => {
                            let title = ""
                            if(key === "purchasedHere"){
                                title = "Purchased Here"
                            }else{
                                title = "Not Purchased Here"
                            }
                            return(
                                <tr key={key}>
                                    <td>{title}</td>
                                    <td>{value}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="mt-5">
                    <h2>Vehicle Brands</h2>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Vehicle Brand</th>
                            <th>Number of appointments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(this.state.brandMostServiced).map(([key, value]) => {
                            return(
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="mt-5">
                    <h2>Vehicle Models</h2>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Vehicle Models</th>
                            <th>Number of appointments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(this.state.modelMostServiced).map(([key, value]) => {
                            return(
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>

        );
    }
}

export default DataList;
