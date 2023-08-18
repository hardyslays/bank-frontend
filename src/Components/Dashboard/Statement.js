import React from 'react'
import { MDBCard, MDBCardText, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export const Statement = () => {
  const transactions = [
    { toAccount: '987654321', name: 'Jane Smith', amount: 1000, balance: 9500, sign :'-' ,timestamp: '2023-08-17 10:30 AM' },
    { toAccount: '876543210', name: 'John Doe', amount: 2000, balance: 11500, sign: '+',timestamp: '2023-08-17 02:15 PM' },
    
];



 return (
<div className="container">
            <MDBCard className="my-4 p-4">
                <MDBCardText className='fs-4 mb-4'>Account Details</MDBCardText>
                <MDBCardText className='mb-2'>Account Number: 123456789</MDBCardText>
                <MDBCardText className='mb-2'>Account Holder Name: John Doe</MDBCardText>
                <MDBCardText>Account Balance: INR 10,000</MDBCardText>
            </MDBCard>

            <MDBTable bordered>
                <MDBTableHead>
                    <tr>
                        <th>Account Number</th>
                        <th>Name</th>
                        <th>Transfer Amount</th>
                        <th>Balance</th>
                        <th>Timestamp</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.toAccount}</td>
                            <td>{transaction.name}</td>
                            <td>
    <span style={{ color: transaction.sign === '-' ? 'red' : 'green' }}>{transaction.sign}</span>
    <span style={{ color: transaction.sign === '-' ? 'red' : 'green' }}>{transaction.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
    
</td>

                            <td>{transaction.balance.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
                            <td>{transaction.timestamp}</td>
                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>
        </div>
    );
                    }
 



        


 





    
        