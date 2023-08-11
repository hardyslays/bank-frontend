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
                <Card.Text className='px-2 pb-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    <Container fluid='true' className='justify-content-center'>
        <Row style={{width:'100%'}} className='justify-content-center'>
            <Col style={{border:'solid 1px green'}} fluid="xs sm" md={{span: 4, order: 2}} className='my-5'>
                <Container>
                    <HomeCard/>
                </Container>
            </Col>
            <Col style={{border:'solid 1px red'}} fluid="xs sm" md={{span: 7, order: 1}} className='my-5'>

            </Col>
        </Row>
    </Container>
  )
}
