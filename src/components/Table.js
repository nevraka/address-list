import React from 'react';
import './Table.css';

const Table = ({ users }) => {
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
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.postalCode}</td>
                <td>{user.city}</td>
                <td>{user.federalState}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
