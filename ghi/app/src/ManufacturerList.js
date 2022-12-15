import React from 'react';

class ManufacturerList extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          manufacturers: [],
      }
      this.fetchManufacturers = this.fetchManufacturers.bind(this);
  }

  componentDidMount() {
      this.fetchManufacturers();
  }

  async fetchManufacturers() {
      const response = await fetch('http://localhost:8100/api/manufacturers/')
      if (response.ok) {
          const data = await response.json()
          this.setState({ manufacturers: data.manufacturers })
      }
  }

  render() {
      return (
          <>
              <div className="mt-3">
                  <h1>Manufacturers List</h1>
              </div>
              <table className="table table-striped">
                  <thead>
                      <tr>
                          <th>Name</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.manufacturers.map(manufacturer => {
                              return (
                                  <tr key={manufacturer.id}>
                                      <td>{manufacturer.name}</td>
                                  </tr>
                              );
                          }
                      )}
                  </tbody>
              </table>
          </>

      );
  }
}

export default ManufacturerList;
