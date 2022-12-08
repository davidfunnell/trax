import { useState } from 'react';

export default function SaleRecordsFiltered({ salesRecords, salesPersons }) {
  const [search, setSearch] = useState('Sales Person');
  return (
    <>
      <h1>Sales Person History</h1>
      <div className="container">
        <div className="pb row">
          <form id="form_search" name="form_search" method="get" action="" className="form-inline">
            <div className="form-group">
              <div className="input-group">
                <select onChange={event => setSearch(event.target.value)} className="form-select" type="text" placeholder="Name of Sales Person">
                  <option value="">Sales Person</option>
                  {salesPersons.map(person => {
                    return (
                      <option key={person.id} value={person.name}>
                        {person.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </form>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Sales Person</th>
                <th>Customer</th>
                <th>VIN</th>
                <th>Sale Price</th>
              </tr>
            </thead>
            <tbody>
              {salesRecords.filter(record => record.sales_person.name.includes(search)).map(record => {
                  return (
                    <tr key={record.id}>
                      <td>{record.sales_person.name}</td>
                      <td>{record.customer.name}</td>
                      <td>{record.vin}</td>
                      <td>{record.price}</td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
        </div>
      </>
  )
}
