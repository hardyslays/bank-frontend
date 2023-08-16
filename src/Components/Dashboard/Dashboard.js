import React, { useState } from 'react'
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom';

export const Dashboard = () => {
    const [page, setPage] = useState('dashboard');

  return (
    <Row className='h-100'>
        <Col md={2} style={{border:'solid 1px red'}} className='p-0'>
            <Navbar bg="light" data-bs-theme="light" className='align-items-center justify-content-start h-100 w-100 flex-column'>
                <Navbar.Brand className='w-100 text-center' as={'h3'}>Hello, User</Navbar.Brand>
                <Nav className='flex-column'defaultActiveKey={'dashboard'} onSelect={key => setPage(key)}>
                    <Nav.Link eventKey={'dashboard'}>DashBoard</Nav.Link>
                    <Nav.Link eventKey={'statement'}>A/C Statements</Nav.Link>
                    <Nav.Link eventKey={'transfer'}>Transfer Funds</Nav.Link>
                    <Nav.Link eventKey={'details'}>Account Details</Nav.Link>
                </Nav>
            </Navbar>
        </Col>
        <Col md={10} style={{border:'solid 1px green'}}>
            {page}
        </Col>
    </Row>
  )
}
