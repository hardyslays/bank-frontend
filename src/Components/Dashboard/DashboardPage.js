import React, { useState, useEffect } from 'react';
import { Row, Col, Nav, Navbar, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Dashboard } from './Dashboard';
import { Statement } from './Statement';
import { Transfer } from './Transfer';
import { AcDetails } from './AcDetails';

import Auth from '../../Services/Auth';

export const DashboardPage = () => {
    const [page, setPage] = useState('dashboard');
    const [user, setUser] = useState('');
    const [isMenuExpanded, setIsMenuExpanded] = useState(true);

    const navigate = useNavigate();
    const { getToken } = Auth();

    useEffect(() => {
        // To check if already Logged in
        if (!getToken()) {
            navigate('/login', { replace: true });
        }
        setUser(Auth().getUser());
    }, []);

    const handleMenuToggle = () => {
        setIsMenuExpanded(!isMenuExpanded);
    };

    return (
        <Row className='m-0 p-0 mh-100'>
            <Col md={2} className='p-0'>
                <Card className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff' }}>
                    <Navbar bg='light' data-bs-theme='light' className='align-items-center justify-content-start h-100 w-100 flex-column'>
                        <Navbar.Brand className='text-center fs-5'>
                            <Button variant='link' className='p-0 text-white' onClick={handleMenuToggle}>
                                <span className='navbar-toggle-icon'>
                                    <span className={`icon-bar ${isMenuExpanded ? 'icon-bar-expanded' : ''}`}></span>
                                    <span className={`icon-bar ${isMenuExpanded ? 'icon-bar-expanded' : ''}`}></span>
                                    <span className={`icon-bar ${isMenuExpanded ? 'icon-bar-expanded' : ''}`}></span>
                                </span>
                            </Button>
                            Hello, {user.charAt(0).toUpperCase() + user.slice(1)}
                        </Navbar.Brand>
                        {isMenuExpanded && (
                            <Nav className='flex-column' defaultActiveKey={'dashboard'} onSelect={key => setPage(key)}>
                                <Nav.Link eventKey={'dashboard'}>DashBoard</Nav.Link>
                                <Nav.Link eventKey={'statement'}>A/C Statements</Nav.Link>
                                <Nav.Link eventKey={'transfer'}>Transfer Funds</Nav.Link>
                                <Nav.Link eventKey={'details'}>Account Details</Nav.Link>
                            </Nav>
                        )}
                    </Navbar>
                </Card>
            </Col>
            <Col className='p-0'>
                {(page === 'dashboard') && <Dashboard />}
                {(page === 'statement') && <Statement />}
                {(page === 'transfer') && <Transfer />}
                {(page === 'details') && <AcDetails />}
            </Col>
        </Row>
    );
};
