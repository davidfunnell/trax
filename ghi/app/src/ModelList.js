import React from 'react';


class ModelList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      models: [],
    }
    this.fetchModels = this.fetchModels.bind(this);
  }

  componentDidMount() {
    this.fetchModels();
  }

  async fetchModels() {
    const response = await fetch('http://localhost:8100/api/models/')
    if (response.ok) {
      const data = await response.json()
      this.setState({ models: data.models })
    }
  }

  render() {
    return (
      <>

        <div className='mb-3 mt-3'>
          <h1>Model List</h1>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Manufacturer</th>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {this.state.models.map(model => {
              return (
                <tr key={model.id}>
                  <td>{model.manufacturer.name}</td>
                  <td>{model.name}</td>
                  <td><img src={model.picture_url} alt="Car" width='25%' align="right" /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>

    );
  }
}

export default ModelList;
