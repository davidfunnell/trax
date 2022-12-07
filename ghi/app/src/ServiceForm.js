import React from 'react';

class ServiceForm extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       fabric: '',
    //       style: '',
    //       color: '',
    //       pictureUrl: '',
    //       location: '',
    //       hasSignedUp: false,
    //       locations: [],
    //     };
    //     this.handleFabricChange = this.handleFabricChange.bind(this);
    //     this.handleStyleChange = this.handleStyleChange.bind(this);
    //     this.handleColorChange = this.handleColorChange.bind(this);
    //     this.handlePictureUrlChange = this.handlePictureUrlChange.bind(this);
    //     this.handleLocationChange = this.handleLocationChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }

    //   async handleSubmit(event) {
    //     event.preventDefault();
    //     const data = {...this.state};
    //     data.picture_url = data.pictureUrl;
    //     delete data.pictureUrl;
    //     delete data.locations;
    //     delete data.hasSignedUp
    //     console.log(data)

    //     const locationUrl = 'http://localhost:8090/api/hats/';
    //     const fetchConfig = {
    //       method: "post",
    //       body: JSON.stringify(data),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     };
    //     const response = await fetch(locationUrl, fetchConfig);
    //     if (response.ok) {
    //       const newHat = await response.json();
    //       console.log(newHat);

    //       const cleared = {
    //         fabric: '',
    //         style: '',
    //         color: '',
    //         pictureUrl: '',
    //         location: '',
    //         hasSignedUp: true,
    //       };
    //       this.setState(cleared);
    //     }
    //   }

    // handleFabricChange(event) {
    //     const value = event.target.value;
    //     this.setState({fabric: value, hasSignedUp: false})
    //     }

    // handleStyleChange(event) {
    //     const value = event.target.value;
    //     this.setState({style: value, hasSignedUp: false})
    //     }

    // handleColorChange(event) {
    //     const value = event.target.value;
    //     this.setState({color: value, hasSignedUp: false})
    //     }

    // handlePictureUrlChange(event) {
    //     const value = event.target.value;
    //     this.setState({pictureUrl: value, hasSignedUp: false});
    //     }

    // handleLocationChange(event) {
    //     const value = event.target.value;
    //     this.setState({location: value, hasSignedUp: false});
    //     }

    // async componentDidMount() {
    //     const url = 'http://localhost:8090/api/locationsvo/';

    //     const response = await fetch(url);

    //     if (response.ok) {
    //       const data = await response.json();
    //       this.setState({locations: data.locations});
    //     }
    // }

      render() {
        // let messageClasses = 'alert alert-success d-none mb-0';
        // let formClasses = '';
        // if (this.state.hasSignedUp) {
        //   messageClasses = 'alert alert-success mt-3 mb-0';
        // }
        return (
            <p>Service Form</p>
        //   <div className="row">
        //     <div className="offset-3 col-6">
        //       <div className="shadow p-4 mt-4">
        //         <h1>Create a new hat</h1>
        //         <form className={formClasses} onSubmit={this.handleSubmit} id="create-location-form" >
        //           <div className="form-floating mb-3">
        //             <input value={this.state.fabric} onChange={this.handleFabricChange} placeholder="fabric" required type="text" name="fabric" id="fabric" className="form-control" />
        //             <label htmlFor="fabric">Fabric</label>
        //           </div>
        //           <div className="form-floating mb-3">
        //             <input value={this.state.style} onChange={this.handleStyleChange} placeholder="style" required type="text" name="style" id="style" className="form-control" />
        //             <label htmlFor="style">Style</label>
        //           </div>
        //           <div className="form-floating mb-3">
        //             <input value={this.state.color} onChange={this.handleColorChange} placeholder="color" required type="text" name="color" id="color" className="form-control" />
        //             <label htmlFor="color">Color</label>
        //           </div>
        //           <div className="form-floating mb-3">
        //             <input value={this.state.pictureUrl} onChange={this.handlePictureUrlChange} placeholder="picture_url" required type="url" name="picture_url" id="picture_url" className="form-control" />
        //             <label htmlFor="picture_url">Picture URL</label>
        //           </div>
        //           <div className="mb-3">
        //             <select value={this.state.location} onChange={this.handleLocationChange} required name="location" id="location" className="form-select">
        //               <option value="">Choose a location</option>
        //               {this.state.locations.map(location => {
        //                 return (
        //                   <option key={location.id} value={location.id}>
        //                     {location.closet_name}
        //                   </option>
        //                 );
        //               })}
        //             </select>
        //           </div>
        //           <button className="btn btn-primary">Create</button>
        //         </form>
        //         <div className={messageClasses} id="success-message">
        //           Congratulations! You created a hat!
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        );
      }
    }

export default ServiceForm;
