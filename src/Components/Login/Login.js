import React, {useEffect} from 'react'
import {LoginForm} from './LoginForm'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import Auth from '../../Services/Auth'

export const Login = () => {
    const navigate = useNavigate();
    const { getToken } = Auth();
    useEffect(() => {
        //To check if already Logged in
        const token = getToken();
        // console.log('token: ', token)
        // console.log('val:', (!token))
        if(!!getToken()){
            navigate('/dashboard', {replace: true})
        }
    }, [])

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
