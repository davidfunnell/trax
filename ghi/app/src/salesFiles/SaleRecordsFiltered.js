import React from 'react';


class SaleRecordsFiltered extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      salesEmployee: "",
      salesEmployees: [],
      sales: [],
    }
    this.fetchSaleEmployees = this.fetchSaleEmployees.bind(this);
    this.handleSalesEmployeeChange = this.handleSalesEmployeeChange.bind(this);
    this.fetchFilteredSales = this.fetchFilteredSales.bind(this);
  }


  handleSalesEmployeeChange(event) {
    const value = event.target.value;
    this.fetchFilteredSales(value);
    this.setState({ salesEmployee: value });
  }

  componentDidMount() {
    this.fetchSaleEmployees();
  }

  async fetchFilteredSales(id) {
    const response = await fetch(`http://localhost:8090/api/salerecords/sales_person/${id}`)
    if (response.ok) {
      const data = await response.json()
      this.setState({ sales: data.sales })
    }
  }

  async fetchSaleEmployees() {
    const response = await fetch('http://localhost:8090/api/sales_persons/')
    if (response.ok) {
      const data = await response.json()
      this.setState({ salesEmployees: data.sales_persons })
    }
  }

  render() {
    return (
      <>
        <div className="mt-3">
          <h1>Sales person history</h1>
        </div>
        <div className="mb-3">
          <select value={this.state.salesEmployee} onChange={this.handleSalesEmployeeChange} required name="technician" id="technician" className="form-select">
            <option value="">Choose a sales employee</option>
            {this.state.salesEmployees.map(salesEmployee => {
              return (
                <option key={salesEmployee.id} value={salesEmployee.id}>
                  {salesEmployee.name}
                </option>
              );
            })}
          </select>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sales Person</th>
              <th>Purchaser</th>
              <th>VIN</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sales.map(sale => {
              return (
                <tr key={sale.id}>
                  <td>{sale.sales_person.name}</td>
                  <td>{sale.customer.name}</td>
                  <td>{sale.vin}</td>
                  <td>{sale.price}</td>
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

export default SaleRecordsFiltered;
