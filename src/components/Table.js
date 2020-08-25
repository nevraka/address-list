import React from 'react';
import './Table.css';

const Table = ({ data }) => {
  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name-Surname</th>
            <th>Address</th>
            <th>Postcode</th>
            <th>City</th>
            <th>Federal State</th>
          </tr>
        </thead>
        <tbody>
          {data.map((doctor) => {
            return (
              <tr>
                <td>{doctor.name}</td>
                <td>{doctor.address}</td>
                <td>{doctor.postalCode}</td>
                <td>{doctor.city}</td>
                <td>{doctor.federalState}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
