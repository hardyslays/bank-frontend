import React, { useState, useEffect } from 'react'
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Dashboard } from './Dashboard';
import {Statement} from './Statement';
import {Transfer} from './Transfer';
import {AcDetails} from './AcDetails';


import Auth from '../../Services/Auth'

export const DashboardPage = () => {
    const [page, setPage] = useState('dashboard');

    const navigate = useNavigate();
    const { getToken } = Auth();

    useEffect(() => {
        //To check if already Logged in
        if(!!getToken()){
            navigate('/login', {replace: true})
        }
    }, [])

  return (
    <Row className='m-0 p-0 mh-100'>
        <Col md={2} style={{border:'solid 1px red'}} className='p-0'>
            <Navbar bg="light" data-bs-theme="light" className='align-items-center justify-content-start h-100 w-100 flex-column'>
                <Navbar.Brand className='text-center fs-5'>Hello, User</Navbar.Brand>
                <Nav className='flex-column'defaultActiveKey={'dashboard'} onSelect={key => setPage(key)}>
                    <Nav.Link eventKey={'dashboard'}>DashBoard</Nav.Link>
                    <Nav.Link eventKey={'statement'}>A/C Statements</Nav.Link>
                    <Nav.Link eventKey={'transfer'}>Transfer Funds</Nav.Link>
                    <Nav.Link eventKey={'details'}>Account Details</Nav.Link>
                </Nav>
            </Navbar>
        </Col>
        <Col className='p-0'>
            {(page==='dashboard')&&<Dashboard/>}
            {(page==='statement')&&<Statement/>}
            {(page==='transfer')&&<Transfer/>}
            {(page==='details')&&<AcDetails/>}
        </Col>
    </Row>
  )
}
