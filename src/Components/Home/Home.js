import React from 'react';
import { Col, Container, Row, Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomeCard = () => {
    const navigate = useNavigate();

    return (
        <Card className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff' }}>
            <Card.Header className='p-3' as='h2'>
                <span style={{ fontWeight: 'bold' }}>WELCOME to Axiom Vault</span><br />
                <span style={{ fontWeight: 'bold', fontSize: '18px' }}>Innovating Financial Freedom.</span><br />
                <span style={{ fontSize: '14px' }}>Financial Wisdom Unleashed!</span>
            </Card.Header>
            <Card.Body>
                <Card.Text className='px-2 pb-1'>
                    {/* Your Lorem Ipsum text */}
                </Card.Text>
            </Card.Body>
            <Card className='mx-3 mb-3' style={{ backgroundColor: '#555' }}>
                <ListGroup className='list-group-flush'>
                    <ListGroup.Item
                        style={{ cursor: 'pointer', color: 'black' }}
                        onMouseEnter={(e) => (e.target.style.color = 'blue')}
                        onMouseLeave={(e) => (e.target.style.color = 'black')}
                        onClick={() => navigate('/login')}
                    >
                        Already a Customer? Log In
                    </ListGroup.Item>
                    <ListGroup.Item
                        style={{ cursor: 'pointer', color: 'black' }}
                        onMouseEnter={(e) => (e.target.style.color = 'blue')}
                        onMouseLeave={(e) => (e.target.style.color = 'black')}
                        onClick={() => navigate('/register')}
                    >
                        New User? Register
                    </ListGroup.Item>
                    <ListGroup.Item
                        style={{ cursor: 'pointer', color: 'black' }}
                        onMouseEnter={(e) => (e.target.style.color = 'blue')}
                        onMouseLeave={(e) => (e.target.style.color = 'black')}
                        onClick={() => navigate('/apply')}
                    >
                        Apply for a new Account
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Card>
    );
};

export const Home = () => {
    return (
        <div className="background-container">
            <div className="content-container">
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={{ span: 6 }} className='my-3'></Col>
                        <Col md={{ span: 6 }} className='my-3'>
                            <HomeCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};
