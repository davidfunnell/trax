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
          <th>Employee Number</th>
          <th>Purchaser</th>
          <th>Vin</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {salesList.map(sale => {
          return (
            <tr key={sale.id}>
              <td>{ sale.sales_person.name }</td>
              <td>{ sale.sales_person.employee_number }</td>
              <td>{ sale.customer.name }</td>
              <td>{ sale.vin }</td>
              <td>{ sale.price }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
    )
}
