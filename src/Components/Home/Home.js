import React from 'react'
import { Col, Container, Row, Card, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const HomeCard = () => {

    const navigate = useNavigate();

    return (
        <Card className='text-center' style={{ backgroundColor: 'rgba(0, 0, 255, 0.2)' }}>
            <Card.Header className='p-3' as='h2'>LCF Co-operative Bank</Card.Header>
            <Card.Body>
                <Card.Text className='px-2 pb-1'>
                <h3>Welcome to our Online Banking Portal!</h3>
                </Card.Text>
                <Card.Text className='px-2 pb-1'>
<b>Who We Are:</b>
<br />

Our diverse team combines financial wisdom with technological innovation. We're dedicated to making banking simpler, more accessible, and tailored to your needs.
<br />
<b>Our Promise</b>
<br />
Security First: Your safety is paramount. Our cutting-edge encryption ensures your data and transactions are always protected.
<br />
Intuitive Design: Our user-friendly platform suits tech enthusiasts and newcomers alike, ensuring easy navigation.
<br />
Complete Services: From balance checks to bill payments, we offer a comprehensive range of banking solutions.
<br />
Anytime Access: Manage your finances 24/7 from anywhere, eliminating time constraints.
<br />
Constant Evolution: We embrace technology's potential to improve your banking experience continually.
<br />
Dedicated Support: Our customer service team is ready to assist, making sure your journey is smooth.
<br />
Join Us Today:

Discover the future of banking with our Online Banking Portal. Experience seamless, secure, and empowered financial management tailored to you. Welcome to the next generation of banking. Welcome to us.

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
   <Container fluid>
      <Row className='justify-content-center'>
        
        <Col
          style={{
            border: 'solid 1px red',
            backgroundImage: `url('./assets/bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          md={8}
          className='my-3'
        >
         
        </Col>
        <Col style={{ border: 'solid 1px green', backgroundColor: 'rgba(0, 0, 255, 0.2)'}} md={4} className='my-3'>
          <HomeCard />
        </Col>
      </Row>
    </Container>
  )
}
