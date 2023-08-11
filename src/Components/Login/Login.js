import React from 'react'
import {LoginForm} from './LoginForm'
import { Col, Container, Row } from 'react-bootstrap'

export const Login = () => {
  return (
    <Container fluid='true' className='justify-content-center'>
    <Row style={{width:'100%'}} className='justify-content-center'>
        <Col style={{border:'solid 1px green'}} fluid="xs sm" md={{span: 4, order: 2}} className='my-5'>
            <Container>
                <LoginForm/>
            </Container>
        </Col>
        <Col style={{border:'solid 1px red'}} fluid="xs sm" md={{span: 7, order: 1}} className='my-5'>

        </Col>
    </Row>
</Container>
)
}
