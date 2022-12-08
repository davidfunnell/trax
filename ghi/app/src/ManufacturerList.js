import React from 'react';

export default function ManufacturerList({ manufacturerList }) {

  return (
    <>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {manufacturerList && manufacturerList.map(manufacturer => {
            return (
              <tr key={manufacturer.id}>
                <td>{manufacturer.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}

