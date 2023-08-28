import React from 'react';
import { MDBCard, MDBCardText, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export const Statement = () => {
  const transactions = [
    { toAccount: '987654321', name: 'Aksh', amount: 1000, balance: 9500, sign: '-', timestamp: '2023-08-17 10:30 AM' },
    { toAccount: '876543210', name: 'Himanshu', amount: 2000, balance: 11500, sign: '+', timestamp: '2023-08-17 02:15 PM' },
  ];

  return (
    <div className='background-container'>
      <div className="container">
        <MDBCard className="my-4 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}>
          <MDBCardText className='fs-4 mb-4'>Account Details</MDBCardText>
          <MDBCardText className='mb-2'>Account Number: 123456789</MDBCardText>
          <MDBCardText className='mb-2'>Account Holder Name: John Doe</MDBCardText>
          <MDBCardText>Account Balance: INR 10,000</MDBCardText>
        </MDBCard>

        <MDBCard style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }} className="p-4">
          <MDBTable bordered>
            <MDBTableHead>
              <tr>
                <th style={{color:'white'}}>Account Number</th>
                <th style={{color:'white'}}>Name</th>
                <th style={{color:'white'}}>Transfer Amount</th>
                <th style={{color:'white'}}>Balance</th>
                <th style={{color:'white'}}>Timestamp</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td style={{color:'white'}}>{transaction.toAccount}</td>
                  <td style={{color:'white'}}>{transaction.name}</td>
                  <td>
                    <span style={{ color: transaction.sign === '-' ? 'red' : 'green' }}>{transaction.sign}</span>
                    <span style={{ color: transaction.sign === '-' ? 'red' : 'green' }}>{transaction.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
                  </td>
                  <td style={{color:'white'}}>{transaction.balance.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
                  <td style={{color:'white'}}>{transaction.timestamp}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCard>
      </div>
    </div>
  );
};
