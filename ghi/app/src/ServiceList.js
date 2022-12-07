import React from 'react';


class ServiceList extends React.Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         hats: [],
    //     }
    //     this.fetchHats = this.fetchHats.bind(this);
    //     this.handleDelete = this.handleDelete.bind(this);
    // }

    // componentDidMount() {
    //     this.fetchHats();
    // }

    // async handleDelete(href){
    //     const locationUrl = `http://localhost:8090${href}`;
    //     const fetchConfig = {
    //       method: "delete",
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     };
    //     const response = await fetch(locationUrl, fetchConfig);
    //     if (response.ok) {
    //       const deleteHat = await response.json();
    //       console.log(deleteHat);
    //       this.fetchHats();
    //     }
    // }

    // async fetchHats() {
    //     const response = await fetch('http://localhost:8090/api/hats/')
    //     if (response.ok) {
    //         const data = await response.json()
    //         this.setState({hats: data.hats})
    //     }
    // }

    render() {
        return (
            <p>Service List</p>
            // <table className="table table-striped">
            //     <thead>
            //         <tr>
            //             <th>Fabric</th>
            //             <th>Style</th>
            //             <th>Color</th>
            //             <th>Location</th>
            //             <th>Delete</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {this.state.hats.map(hat => {
            //             return (
            //                 <tr key={hat.id}>
            //                     <td>{hat.fabric}</td>
            //                     <td>{hat.style}</td>
            //                     <td>{hat.color}</td>
            //                     <td>{hat.location.closet_name}</td>
            //                     <td><button onClick={() => this.handleDelete(hat.href)} className="btn btn-primary">Delete</button></td>
            //                 </tr>
            //             );
            //         })}
            //     </tbody>
            // </table>

    );
    }
}

export default ServiceList;
