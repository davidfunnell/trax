import React from 'react';

class ModelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      manufacturerId: '',
      created: false,
      manufacturers: [],
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    const value = event.target.value;
    this.setState({ name: value, created: false});
  }

  handleManufacturerChange(event) {
    const value = event.target.value;
    this.setState({ manufacturerId: value, created: false });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    data.manufacturer_id = data.manufacturerId;
    delete data.manufacturers;
    delete data.manufacturerId;
    delete data.created
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
      const cleared = {
        name: '',
        manufacturerId: '',
        created: true,
      };
      this.setState(cleared);
    }
  }

  async componentDidMount() {
    const url = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({manufacturers: data.manufacturers});
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
            <h1>Create a new model</h1>
            <form className={formClasses} onSubmit={this.handleSubmit} id="create-location-form" >
              <div className="form-floating mb-3">
                <input value={this.state.name} onChange={this.handleNameChange} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="mb-3">
                <select value={this.state.manufacturerId} onChange={this.handleManufacturerChange} required name="manufacturer" id="manufacturer" className="form-select">
                  <option value="">Choose a manufacturer</option>
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
            <div className={messageClasses} id="success-message">
              Congratulations! You created a new model!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelForm;
