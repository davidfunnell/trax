import React from 'react';

class ManufacturerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      created: false,
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    const value = event.target.value;
    this.setState({name: value, created: false});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.created
    const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(manufacturerUrl, fetchConfig);
    if (response.ok) {
      const cleared = {
        name: '',
        created: true,
      };
      this.setState(cleared);
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
              <h1>Add a manufacturer</h1>
              <form className={formClasses} onSubmit={this.handleSubmit} id="create-location-form" >
                <div className="form-floating mb-3">
                  <input value={this.state.name} onChange={this.handleNameChange} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                  <label htmlFor="name">Name</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
              <div className={messageClasses} id="success-message">
                Congratulations! You added a manufacturer!
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ManufacturerForm;
