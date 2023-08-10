import React from 'react'
import { Col, Container, Row, Card, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const HomeCard = () => {

    const navigate = useNavigate();

    return (
        <Card className='text-center'>
            <Card.Header className='p-4' as='h2'>Bank Home Page</Card.Header>
            <Card.Body>
                <Card.Text className='px-2 pb-1'>
                Hey There, Welcome to our banking system. We are here for you, always!!
                </Card.Text>
            </Card.Body>
            <Card className='mx-3'>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item 
                        style={{cursor:'pointer'}} 
                        onClick={() => navigate('/login')}>
                        Already a Customer? Log In
                    </ListGroup.Item>
                    <ListGroup.Item 
                        style={{cursor:'pointer'}} 
                        onClick={() => navigate('/register')}>
                        New User? Register
                    </ListGroup.Item>
                    <ListGroup.Item 
                        style={{cursor:'pointer'}} 
                        onClick={() => navigate('/apply')}>
                        Apply for a new Account
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            <Card.Body>
            </Card.Body>
        </Card>
    )
}

export const Home = () => {
  return (
    <div height='100%'>
    <Container style={{margin: 0, padding: 0}}>
        <Row>
            <Col fluid="xs sm" md={{span: 4, order: 2}} className='my-5'>
                <Container>
                    <HomeCard/>
                </Container>
            </Col>
            <Col fluid="xs sm" md={{span: 8, order: 1}} className='my-5'>

            </Col>
        </Row>
    </Container>
    </div>
  )
}
