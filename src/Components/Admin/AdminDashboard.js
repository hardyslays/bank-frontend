import React, { useEffect, useState } from 'react'
import { ButtonGroup, Col, Card, Button, Row, ListGroup } from 'react-bootstrap'
import { getCustomers,getCustomersApproved,getCustomersAll } from '../../Services/Admin';
import { useNavigate } from 'react-router-dom';




export const AdminDashboard = (main_props) => {

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
        if (main_props.heading==="All Customer"){
            // getCustomers()
            getCustomersAll()
            .then(data => {
                setCust(data)
                console.log(data)
            })
        }
        else if (main_props.heading==="Approved Customer"){
            getCustomersApproved()
            // getCustomersAll()
            .then(data => {
                setCust(data)
                console.log(data)
            })
        }
        else {
            getCustomers()
            // getCustomersAll()
            .then(data => {
                setCust(data)
                console.log(data)
            })
        }
    }, [])

    function CustomCard(props) {
        const routeChange = (path) =>{
            console.log(path);
            if (path==="/admin/all/"){
                // getCustomers()
                getCustomersAll()
                .then(data => {
                    setCust(data)
                    console.log(data)
                })
            }
            else if (path==="/admin/approved/"){
                getCustomersApproved()
                // getCustomersAll()
                .then(data => {
                    setCust(data)
                    console.log(data)
                })
            }
            else {
                getCustomers()
                // getCustomersAll()
                .then(data => {
                    setCust(data)
                    console.log(data)
                })
            }
            navigate(path);
            }
          return (
            <Col>
            <Card style={{ width: '18rem', height:'90%', margin:'auto', padding:'0 10px 0 10px'}}>
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                  {props.desc}
                </Card.Text>
                <Button onClick={() => routeChange(props.url)} variant="primary" className='m-3'>{props.url_title}</Button>
              </Card.Body>
            </Card>
            </Col>
          );
        }

  return (<>
    <h1 className='text-center'>Admin Dashboard</h1>
    <Row lg={3} mx={5}>
    <CustomCard title="All" desc="This is list of all customers who have applied" 
                url="/admin/all/" url_title="Customers"/>
    <CustomCard title="Approved" desc="This is list of all approved customers" 
                url="/admin/approved/" url_title="Approved"/>
    <CustomCard title="Pending" desc="This is list of all unapproved customers" 
                url="/admin/pending/" url_title="Pending"/>
    </Row>
    <h3 className='text-center'>{main_props.heading}</h3>

    <Row xs={1} md={3} lg={4} className='w-100'>
        {cust.map(customer => {
            return(
            <Col key={customer.customerId}>
            <Card className='m-3' bg='light'>
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
