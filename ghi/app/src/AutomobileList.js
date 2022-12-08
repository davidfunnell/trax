import React from 'react';


class AutomobileList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            autos: [],
        }
        this.fetchAutomobiles = this.fetchAutomobiles.bind(this);
    }

    componentDidMount() {
        this.fetchAutomobiles();
    }

    async fetchAutomobiles() {
        const response = await fetch('http://localhost:8100/api/automobiles/')
        if (response.ok) {
            const data = await response.json()
            this.setState({ autos: data.autos })
        }
    }

    render() {
        return (
            <>
            <h1>Automobile Inventory</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Vin</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.autos.map(auto => {
                        return (
                            <tr key={auto.id}>
                                <td>{auto.vin}</td>
                                <td>{auto.color}</td>
                                <td>{auto.year}</td>
                                <td>{auto.model.name}</td>
                                <td>{auto.model.manufacturer.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </>

        );
    }
}

export default AutomobileList;
