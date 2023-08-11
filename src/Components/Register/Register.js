import React, {useRef} from 'react'
import { Form, Button, Card } from "react-bootstrap";
import { Col, Container, Row, ListGroup } from 'react-bootstrap'
import { RegisterForm } from './RegisterForm';

export const Register = () => {
    
    return (
        <Container fluid='true' className='justify-content-center'>
        <Row style={{width:'100%'}} className='justify-content-center'>
            <Col style={{border:'solid 1px green'}} fluid="xs sm" md={{span: 4, order: 2}} className='my-5'>
                <Container>
                    <RegisterForm/>
                </Container>
            </Col>
            <Col style={{border:'solid 1px red'}} fluid="xs sm" md={{span: 7, order: 1}} className='my-5'>

            </Col>
        </Row>
    </Container>
    )
}








