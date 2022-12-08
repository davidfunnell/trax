import React from 'react';

export default function ModelList({ modelList }) {
  return (
    <>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Model Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {modelList && modelList.map(model => {
            return (
              <tr key={model.href}>
                <td>{model.name}</td>
                <td>{model.manufacturer.name}</td>
                <td><img src={model.picture_url} alt='Picture of Car' width='70%' align='right' /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}

