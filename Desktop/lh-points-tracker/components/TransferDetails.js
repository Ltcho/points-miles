// components/TransferDetailsTable.js
import React from 'react';

export default function TransferDetailsTable({ data }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Airline Loyalty Program</th>
          <th>Transfer Ratio</th>
          <th>Transfer Time</th>
          <th>Minimum Transfer Amount</th>
          <th>Minimum Increments</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.airline}</td>
            <td>{row.ratio}</td>
            <td>{row.time}</td>
            <td>{row.minTransfer}</td>
            <td>{row.increment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}