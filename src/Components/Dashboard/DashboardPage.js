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
    const [user, setUser] = useState('');

    const navigate = useNavigate();
    const { getToken } = Auth();

    useEffect(() => {
        //To check if already Logged in
        if(!getToken()){
            navigate('/login', {replace: true})
            return
        }
        setUser(Auth().getUser());
    }, [])

  return (
    <Row className='m-0 p-0 h-100 d-flex justify-content-center align-items-center' >
        <Col md={2} className='p-0 h-100'>
            <Navbar bg="light" data-bs-theme="light" className='h-100 align-items-center justify-contents-center h-100 w-100 flex-column'>
                <Navbar.Brand className='text-center fs-5'>Hello, {user.charAt(0).toUpperCase() + user.slice(1)}</Navbar.Brand>
                <Nav className='flex-column'defaultActiveKey={'dashboard'} onSelect={key => setPage(key)}>
                    <Nav.Link eventKey={'dashboard'}>DashBoard</Nav.Link>
                    <Nav.Link eventKey={'statement'}>A/C Statements</Nav.Link>
                    <Nav.Link eventKey={'transfer'}>Transfer Funds</Nav.Link>
                    <Nav.Link eventKey={'details'}>Account Details</Nav.Link>
                </Nav>
            </Navbar>
        </Col>
        <Col className='p-0 d-flex justify-content-center align-items-center'>
            {(page==='dashboard')&&<Dashboard/>}
            {(page==='statement')&&<Statement/>}
            {(page==='transfer')&&<Transfer/>}
            {(page==='details')&&<AcDetails/>}
        </Col>
    </Row>
  )
}
