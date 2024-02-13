import React from 'react'
import currencyJson from '../../mock/euro-currency.json'
import './practical-3.css'

const Practical3 = () => {
  return (
    <div className='table-container'>
      <table className='custom-table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Base Currency</th>
            <th>Target Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {currencyJson.map((row, index) => (
            <tr key={index}>
              <td>{row.fields.date}</td>
              <td>EUR</td>
              <td>{row.fields.currency}</td>
              <td>{`${row.fields.rate.toFixed(2)} ${row.fields.currency}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Practical3
