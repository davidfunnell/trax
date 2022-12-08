import React from 'react';

class AutomobileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      year: '',
      vin: '',
      modelId: '',
      created: false,
      models: [],
    };
    this.handleVinChange = this.handleVinChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    async handleSubmit(event) {
      event.preventDefault();
      const data = {...this.state};
      data.model_id = data.modelId;
      delete data.modelId;
      delete data.models;
      delete data.created

      const automobileUrl = 'http://localhost:8100/api/automobiles/';
      const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(automobileUrl, fetchConfig);
      if (response.ok) {
        // const newService = await response.json();
        // console.log(newService);

        const cleared = {
          color: '',
          year: '',
          vin: '',
          modelId: '',
          created: true,
        };
        this.setState(cleared);
      }
    }

  handleVinChange(event) {
    const value = event.target.value;
    this.setState({ vin: value, created: false })
  }

  handleColorChange(event) {
    const value = event.target.value;
    this.setState({ color: value, created: false })
  }

  handleYearChange(event) {
    const value = event.target.value;
    this.setState({ year: value, created: false })
  }

  handleModelChange(event) {
      const value = event.target.value;
      this.setState({modelId: value, created: false});
      }

  async componentDidMount() {
      const url = 'http://localhost:8100/api/models/';

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        this.setState({models: data.models});
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
            <h1>Add a new automobile to inventory</h1>
            <form className={formClasses} onSubmit={this.handleSubmit} id="create-location-form" >
              <div className="form-floating mb-3">
                <input value={this.state.color} onChange={this.handleColorChange} placeholder="color" required type="text" name="color" id="color" className="form-control" />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input value={this.state.year} onChange={this.handleYearChange} placeholder="year" required type="text" name="year" id="year" className="form-control" />
                <label htmlFor="year">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input value={this.state.vin} onChange={this.handleVinChange} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">Vin</label>
              </div>
              <div className="mb-3">
                <select value={this.state.modelId} onChange={this.handleModelChange} required name="model" id="model" className="form-select">
                  <option value="">Choose a model</option>
                  {this.state.models.map(model => {
                    return (
                      <option key={model.href} value={model.id}>
                        {model.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
            <div className={messageClasses} id="success-message">
              Congratulations! You added a new automobile to inventory!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AutomobileForm;
