import React, { useEffect, useState } from 'react'
import { ButtonGroup, Col, Card, Button, Row, ListGroup } from 'react-bootstrap'
import { getCustomers } from '../../Services/Admin';
import { useNavigate } from 'react-router-dom';

export const AdminDashboard = () => {

    const navigate = useNavigate()
    const [cust, setCust] = useState([
        {
            "customerId": "4184938902",
            "title": "Mr",
            "firstName": "Himanshu",
            "middleName": "hh",
            "lastName": "hh",
            "fatherName": "hh",
            "mobileNumber": "9911199111",
            "emailId": "e@e",
            "adharNumber": "101020203030",
            "dob": "2023-08-11",
            "residentialLine1": "f",
            "residentialLine2": "hfg",
            "residentialLandmark": "f",
            "residentialState": "Delhi",
            "residentialPincode": "110011",
            "permanentLine1": "fw",
            "permanentLine2": "fr",
            "permanentLandmark": "d",
            "permanentState": "ni",
            "permanentPincode": "110011",
            "occupationType": "none",
            "sourceOfIncome": "none",
            "grossAnnualIncome": 0,
            "netBankingBool": "1",
            "debitCardBool": "1"
        },
        {
            "customerId": "9253293269",
            "title": "Ms",
            "firstName": "Kush",
            "middleName": "",
            "lastName": "Rawal",
            "fatherName": "abc",
            "mobileNumber": "998726362",
            "emailId": "gugasiv",
            "adharNumber": "446713248165",
            "dob": "2012-12-12",
            "residentialLine1": "abc",
            "residentialLine2": "def",
            "residentialLandmark": "chowk",
            "residentialState": "maharashtra",
            "residentialPincode": "411098",
            "permanentLine1": "dsade",
            "permanentLine2": "wfed",
            "permanentLandmark": "das",
            "permanentState": "maharashtra",
            "permanentPincode": "411098",
            "occupationType": "service",
            "sourceOfIncome": "farm",
            "grossAnnualIncome": 12333,
            "netBankingBool": "1",
            "debitCardBool": "1"
        },
        {
            "customerId": "9659805269",
            "title": "Ms",
            "firstName": "Aksh",
            "middleName": "",
            "lastName": "Sharma",
            "fatherName": "abc",
            "mobileNumber": "998726362",
            "emailId": "gugasiv",
            "adharNumber": "446713248165",
            "dob": "2012-12-12",
            "residentialLine1": "abc",
            "residentialLine2": "def",
            "residentialLandmark": "chowk",
            "residentialState": "maharashtra",
            "residentialPincode": "411098",
            "permanentLine1": "dsade",
            "permanentLine2": "wfed",
            "permanentLandmark": "das",
            "permanentState": "maharashtra",
            "permanentPincode": "411098",
            "occupationType": "service",
            "sourceOfIncome": "farm",
            "grossAnnualIncome": 12333,
            "netBankingBool": "1",
            "debitCardBool": "1"
        }
    ]);

    useEffect(() => {
        getCustomers()
        .then(data => {
            setCust(data)
            console.log(data)
        })
    }, [])

  return (<>
    <h1 className='text-center'>Admin Dashboard</h1>

    <h3 className='text-center'>Customer details</h3>

    <Row xs={1} md={3} lg={4} className='w-100'>
        {cust.map(customer => {
            return(
            <Col key={customer.customerId}>
            <Card className='m-2' bg='light'>
                <Card.Header className='px-3 py-2' as='h5'>CID: {customer.customerId}</Card.Header>
                <Card.Title className='px-3 py-2'>Name: {`${customer.firstName}  ${customer.middleName} ${customer.lastName}`}</Card.Title>

                <ListGroup className='list-group-flush'>
                    <ListGroup.Item>D.O.B: {customer.dob}</ListGroup.Item>
                    <ListGroup.Item>Mobile:  {customer.mobileNumber}</ListGroup.Item>
                    <ListGroup.Item>Residential Address: {customer.residentialLine1 + '\n' + customer.residentialLine2 + '\n' + customer.residentialState + ' ' + customer.residentialPincode}</ListGroup.Item>
                </ListGroup>
                <Card.Footer className='w-100 px-3 d-flex justify-content-center'>
                    <Button variant='info' className='w-50' onClick={() => navigate('/admin/customer/' + customer.customerId)}>More Details</Button>
                </Card.Footer>
            </Card>
        </Col>
            )}
        )}
    </Row>
    </>
  )
}
