import React from 'react';

export default function SalesList({ salesList }) {
  const deleteSale = async (id) => {
    const salesUrl = `http://localhost:8090/api/salerecords/${id}`;
    const fetchConfig = {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(salesUrl, fetchConfig);
    if (response.ok) {
      window.location.reload();
    }
  };

  return (
    <>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Sales Person</th>
          <th>Purchaser</th>
          <th>Vin</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {salesList.map(sale => {
          return (
            <tr key={sale.automobile}>
              <td>{ sale.sales_person.name }</td>
              <td>{ sale.customer.name }</td>
              <td>{ sale.vin }</td>
              <td>{ sale.price }</td>
              <td>
                <button onClick={(e) => deleteSale(sale.id)} className='btn btn-secondary'>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
    )
}
