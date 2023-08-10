import React, {useRef} from 'react'
import { Form, Button, Card } from "react-bootstrap";
import { Col, Container, Row, ListGroup } from 'react-bootstrap'
import { RegisterForm } from './RegisterForm';

export const Register = () => {
    
    return (
        <div height='100%'>
            <Container style={{margin: 0, padding: 0}}>
                <Row>
                    <Col fluid="xs sm" md={{span: 4, order: 2}} className='my-5'>
                        <Container>
                            <RegisterForm/>
                        </Container>
                    </Col>
                    <Col fluid="xs sm" md={{span: 8, order: 1}} className='my-5'>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}








