import React from 'react';

class ModelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      pictureUrl: '',
      manufacturerId: '',
      manufacturers: [],
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePictureChange = this.handlePictureChange.bind(this);
    this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }
  handlePictureChange(event) {
    const value = event.target.value;
    this.setState({ pictureUrl: value });
  }
  handleManufacturerChange(event) {
    const value = event.target.value;
    this.setState({ manufacturerId: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    data.picture_url = data.pictureUrl;
    console.log(data);
    delete data.pictureUrl;
    data.manufacturer_id = data.manufacturerId;
    delete data.manufacturers;
    delete data.manufacturerId;


    const modelUrl = 'http://localhost:8100/api/models/';
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    };

    const response = await fetch(modelUrl, fetchConfig);
    if (response.ok) {
      const newModel = await response.json();
      console.log('model created: ', newModel);
    } else {
      console.log(response)
    }


    const cleared = {
      name: '',
      picture_url: '',
      manufacturer: ''
    };
    this.setState(cleared);
  }

  async componentDidMount() {
    fetch('http://localhost:8100/api/manufacturers/')
      .then(manufacturers => manufacturers.json())
      .then(manufacturers => this.setState(manufacturers))
  }
  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new model</h1>
            <form onSubmit={this.handleSubmit} id="create-model-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handlePictureChange} placeholder="Picture Url" required type="text" name="pictureUrl" id="pictureUrl" className="form-control" />
                <label htmlFor="pictureUrl">Picture Url</label>
              </div>
              <div className="form-floating mb-3">
                <select onChange={this.handleManufacturerChange} placeholder="Manufacturer" required name="manufacturers" id="manufacturer" className="form-select">
                  <option value="">Manufacturer</option>
                  {this.state.manufacturers.map(manufacturer => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelForm;

