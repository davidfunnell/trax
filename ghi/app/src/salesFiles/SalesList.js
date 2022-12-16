import React from 'react';


class SalesList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sales: [],
    }
    this.fetchSales = this.fetchSales.bind(this);
  }

  componentDidMount() {
    this.fetchSales();
  }

  async fetchSales() {
    const response = await fetch('http://localhost:8090/api/salerecords/')
    if (response.ok) {
      const data = await response.json()
      this.setState({ sales: data.sales })
    }
  }

  render() {
    return (
      <>
        <div className="mt-3">
          <h1>Sales List</h1>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sales Person</th>
              <th>Employee Number</th>
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
                  <td>{sale.sales_person.employee_number}</td>
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

export default SalesList;
